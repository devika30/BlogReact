import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_blog, delete_blog } from "./reduxfiles/blogActions";

function CreateBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const blogItems = useSelector((state) => state.blogsList);
  const dispatch = useDispatch();

  const onSubmitBlog = () => {
    dispatch(add_blog(blogTitle, blogBody));
    setBlogTitle("");
    setBlogBody("");
  };

  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
  };

  return (
    <div>
      <label>Blog Title</label>
      <input
        type="text"
        value={blogTitle}
        onChange={(e) => setBlogTitle(e.target.value)}
        name="blogTitle"
      />

      <label>Blog Body</label>
      <input
        type="text"
        value={blogBody}
        onChange={(e) => setBlogBody(e.target.value)}
        name="blogBody"
      />
      <div>
        <button onClick={onSubmitBlog}>Add Blog</button>
      </div>

      {/* {blogItems.map((singleBlog) => {
        return (
          <div key={singleBlog.id}>
            <p>{singleBlog.title}</p>
            <p>{singleBlog.body}</p>
            <button onClick={() => deleteParticularBlog(singleBlog.id)}>
              Delete
            </button>
          </div>
        );
      })} */}
    </div>
  );
}

export default CreateBlog;
