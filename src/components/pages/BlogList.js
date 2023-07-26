import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_blog } from "./../../reduxfiles/blogActions";
import { Link } from "react-router-dom";
import axios from "axios";


export const BlogList = () => {
  const { blogsList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
  };

  return (
    <div>
      {blogsList.map((singleBlog) => (
        <div key={singleBlog.id}>
          <Link to={singleBlog.id.toString()}>
            {" "}
            <p>{singleBlog.title}</p>
          </Link>
          <button onClick={() => deleteParticularBlog(singleBlog.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export const blogsLoader = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

