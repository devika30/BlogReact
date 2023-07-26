import React from "react";
import { useActionData, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
export const SingleBlog = () => {
  const { id } = useParams();
  const blog = useLoaderData();
  return (
    <div>
      <h3>Single Blogs</h3>
      <p>{blog.title}</p>
      <p>{blog.body}</p>
      
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
