import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import myStyle from "../../components/myStyle.css";
import SearchBar from "../pages/SearchBar";

function RootLayout() {
  return (
    <div>
      <header className="navBarBody">
        <div>
          <nav>
            <NavLink className="navLink" to="/">
            Blog Spot
            </NavLink>
            <NavLink className="navLink" to="create">
              Create Blog
            </NavLink>
            <NavLink className="navLink" to="about">
              About
            </NavLink>
            <NavLink className="navLink" to="help">
              Help
            </NavLink>
          </nav>
        </div>
        <div className="search-bar-div">
          <SearchBar />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
