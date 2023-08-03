import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

export const BlogList = () => {
  const randomImageUrls = [image1, image2, image3, image4,image5,image6];
  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
    return randomImageUrls[randomIndex];
  };
  const { blogsList } = useSelector((state) => state);
  return (
    <div>
      <div className="blogBody">
        {blogsList.map((singleBlog) => (
          <div key={singleBlog.id} className="singleBlogBlogList">
            <div className="blogTitleDiv">
              <div>
                <img
                  className="imageInBlogList"
                  src={getRandomImageUrl()}
                />
              </div>

              <div className="contentDiv">
                <p className="titleOfBlog">Title</p>
                <NavLink to={singleBlog.id.toString()}>
                  {" "}
                  <p className="blogTitle">{singleBlog.title}</p>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
