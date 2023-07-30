import React from "react";
import { BlogList } from "./BlogList";

function HomePage() {
  return (
    <div>
      <h1 className="homePageTitle">Blog Page</h1>
      <BlogList />
    </div>
  );
}

export default HomePage;
