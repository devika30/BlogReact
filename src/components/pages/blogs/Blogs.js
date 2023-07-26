import axios from "axios";
import React from "react";
import { Link,useLoaderData } from "react-router-dom";

export const Blogs = () => {
  const blogs = useLoaderData(); //promise is resolved here from loader function

  return (
    <div>
      {blogs.map((singleBlog) => (
        <Link to={singleBlog.id.toString()} key={singleBlog.id}>
            <p>{singleBlog.title}</p>
        </Link>
      ))}
    </div>
  );
};

//loader function

export const blogsLoader = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data
};

export default Blogs;
