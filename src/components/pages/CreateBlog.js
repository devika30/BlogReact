import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_blog,delete_blog,fetchBlogs } from "./../../reduxfiles/blogActions";

function CreateBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const {sitename,blogsList} = useSelector((state) => state);
  const dispatch = useDispatch();

  const generateRandomId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 10;
    let randomId = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  };

  useEffect(()=>{
    dispatch(fetchBlogs())
  },[])
  

  const onSubmitBlog = () => {
    const singleblog = {
      id: generateRandomId(),
      title: blogTitle,
      body: blogBody,
    };

    dispatch(add_blog(singleblog));
    setBlogTitle("");
    setBlogBody("");
  };

  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
  };

  return (
    <div>
      {console.log(blogsList)}
      <h1>{sitename}</h1>
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

      {blogsList.map((singleBlog) => {
        return (
          <div key={singleBlog.id}>
            <p>{singleBlog.title}</p>
            <p>{singleBlog.body}</p>
            <button onClick={() => deleteParticularBlog(singleBlog.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CreateBlog;
