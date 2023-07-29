import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_blog } from "./../../reduxfiles/blogActions";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import myStyle from "../../components/myStyle.css";

export const BlogList = () => {
  const { blogsList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
  };

  return (
    <div>
      <div className="blogBody">
        {blogsList.map((singleBlog) => (
          <div key={singleBlog.id} className="singleBlogBlogList">
            <div className="blogTitleDiv">
              <div>
                <img
                  className="imageInBlogList"
                  src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png"
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

export const blogsLoader = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
