import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "./../../reduxfiles/blogActions";
import {BlogList} from "./BlogList";
import myStyle from "../../components/myStyle.css";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div>
      <h1 className="homePageTitle">Chinnapa Blog Page</h1>
      <BlogList />
    </div>
  );
}

export default HomePage;
