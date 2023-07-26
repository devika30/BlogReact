import React from "react";
import { Outlet,NavLink } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="faq">FAQ</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
   
  );
}

export default HelpLayout;
