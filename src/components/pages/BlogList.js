import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const BlogList = () => {
  const getRandomImageUrl = () => {
    const numImages = 6; // Number of defined images
    const randomIndex = Math.floor(Math.random() * numImages) + 1;
    return `var(--bg-image-${randomIndex})`;
  };
  const { blogsList, filteredBlogs } = useSelector((state) => state);
  return (
    <div>
      <div className="blogBody">
        {filteredBlogs === null
          ? blogsList.map((singleBlog, id) => (
              <div
                key={singleBlog.id}
                className="singleBlogBlogList"
                style={{ backgroundImage: getRandomImageUrl() }}
              >
                <div className="contentDiv">
                  <NavLink to={singleBlog.id.toString()}>
                    {" "}
                    <div className="blogTitle">
                      <p>{singleBlog.title}</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))
          : filteredBlogs.map((singleBlog, id) => (
              <div
                key={singleBlog.id}
                className="singleBlogBlogList"
                style={{ backgroundImage: getRandomImageUrl() }}
              >
                <div className="contentDiv">
                  <NavLink to={singleBlog.id.toString()}>
                    {" "}
                    <div className="blogTitle">
                      <p>{singleBlog.title}</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
