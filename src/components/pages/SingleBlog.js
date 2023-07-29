import React, { useEffect } from "react";
import {
  redirect,
  useActionData,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import { delete_blog } from "./../../reduxfiles/blogActions";
import myStyle from "../myStyle.css";

export const SingleBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const blog = useSelector((state) => {
    console.log("State", state.blogsList);
    return state.blogsList.find((blog) => {
      return blog.id.toString() === id.toString();
    });
  });
  const deleteParticularBlog = (id) => {
    dispatch(delete_blog(id));
    return redirect("/");
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
          src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/113d1046-6bdc-4475-a781-99f6cf7d1acd/001-understand-yourself-large-opt.png"
        />
      </div>
      <p className="titleSingleBlog">{blog.title}</p>
      <p className="bodySingleBlog">{blog.body}</p>
      <DeleteButton deleteMethod={() => deleteParticularBlog(blog.id)} />
    </div>
  );
};

// export const singleBlogLoader = async ({ params }) => {

//   // const response = await axios.get(
//   //   "https://jsonplaceholder.typicode.com/posts/" + id
//   // );
//   // return response.data;
// };
