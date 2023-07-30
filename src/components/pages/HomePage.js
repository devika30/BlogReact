import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./../../reduxfiles/blogActions";
import { BlogList } from "./BlogList";
import myStyle from "../../components/myStyle.css";

function HomePage() {
  const { isBlogFetched, blogsList } = useSelector((state) => state);
  const dispatch = useDispatch();
  // the if conditions run only when the blog length is 0 i.e blogsList: [], once its get filled the useEffect wont run
  useEffect(() => {
    if (!isBlogFetched && blogsList.length == 0) {
      dispatch(fetchBlogs());
    }
  }, []);

  return (
    <div>
      <h1 className="homePageTitle">Blog Page</h1>
      <BlogList />
    </div>
  );
}

export default HomePage;
