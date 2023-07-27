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
              
              <NavLink to={singleBlog.id.toString()}>
                {" "}
                <p className="blogTitle">{singleBlog.title}</p>
              </NavLink>
            </div>
            <div className="deleteBtnDiv">
              <button
                className="deleteButtonStyle"
                onClick={() => deleteParticularBlog(singleBlog.id)}
              >
                Delete
              </button>
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
