import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_blog, delete_blog } from "./../../reduxfiles/blogActions";
import { useNavigate } from "react-router-dom";


function CreateBlog() {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [blogUrl, setBlogUrl] = useState("");
  const navigate = useNavigate();
  const { sitename, blogsList } = useSelector((state) => state);
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

  const onSubmitBlog = (e) => {
    e.preventDefault();
    const singleblog = {
      id: generateRandomId(),
      title: blogTitle,
      body: blogBody,
      url:blogUrl
    };

    dispatch(add_blog(singleblog));
    setBlogTitle("");
    setBlogBody("");
    setBlogUrl("")
    navigate("/");

  };

  return (
    <>
      <h1 className="homePageTitle">Blog Page</h1>
      <div className="blogBodyCreate">
        <form className="formCreateBlog">
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="labelTitleCreate">
              Blog Title
            </label>
            <input
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              name="blogTitle"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleInputPassword1" class="labelTitleCreate">
              Blog Body
            </label>
            <textarea
              type="text"
              value={blogBody}
              onChange={(e) => setBlogBody(e.target.value)}
              name="blogBody"
              class="form-control bodyCreate"
              id="exampleInputPassword1"
            />
          </div>

          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" class="labelTitleCreate">
              Blog Image URL 
            </label>
            <input
              type="text"
              value={blogUrl}
              onChange={(e) => setBlogUrl(e.target.value)}
              name="blogTitle"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" class="createBtn" onClick={onSubmitBlog}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
