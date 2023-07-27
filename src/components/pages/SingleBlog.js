import React from "react";
import { useActionData, useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { delete_blog } from "./../../reduxfiles/blogActions";
import myStyle from "../myStyle.css"

export const SingleBlog = () => {
  const blog = useLoaderData();
  const dispatch = useDispatch();

  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
  };
  return (
    <div className="singlePageBlogDiv">
      <h3>Single Blogs</h3>
      <p>{blog.title}</p>
      <p>{blog.body}</p>
      <DeleteButton deleteMethod={()=>deleteParticularBlog(blog.id)}/>
    </div>
  );
};

export const singleBlogLoader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return response.data;
};
