import React, { useEffect } from "react";
import { redirect, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteButton from "./DeleteButton";
import { delete_blog } from "./../../reduxfiles/blogActions";
import { useNavigate } from "react-router-dom";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";

export const SingleBlog = () => {
  const randomImageUrls = [image1, image2, image3, image4,image5,image6];
  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * randomImageUrls.length);
    return randomImageUrls[randomIndex];
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();


  const blog = useSelector((state) => {
    console.log("State", state.blogsList);
    return state.blogsList.find((blog) => {
      console.log("blog.id", blog.id);
      console.log("id", id.toString());
      return blog.id.toString() === id.toString();
    });
  });
  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
    navigate("/");
  };
  if (!blog) {
    return <h1>Not FOund</h1>;
  }
  return (
    <div className="singlePageBlogDiv">
      <h3 className="headerBlogTitle">Blog page Detail</h3>
      <div className="imageDivSingle">
        <img
          className="imageInBlogListSingle"
          src={getRandomImageUrl()}
        />
      </div>
      <p className="titleSingleBlog">{blog.title}</p>
      <p className="bodySingleBlog">{blog.body}</p>
      <DeleteButton deleteMethod={() => deleteParticularBlog(blog.id)} />
    </div>
  );
};
