import React from "react";
import { BlogList } from "./BlogList";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div>
      <h1 className="homePageTitle">Blog Page</h1>
      <SearchBar />
      <BlogList />
    </div>
  );
}

export default HomePage;
