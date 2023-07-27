import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import myStyle from "../../components/myStyle.css"
function RootLayout() {
  return (
    <div>
      <header className="navBarBody">
        <nav>
          <NavLink className="navLink" to="/">Home</NavLink>
          <NavLink className="navLink" to="create">Create Blog</NavLink>
          <NavLink className="navLink" to="about">About</NavLink>
          <NavLink className="navLink" to="help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
