import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="create">Create Blog</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
