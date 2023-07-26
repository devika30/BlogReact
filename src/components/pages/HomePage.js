import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "./../../reduxfiles/blogActions";
import {BlogList} from "./BlogList";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <BlogList />
    </div>
  );
}

export default HomePage;
