import React from "react";
import aboutUs from "./images/aboutUs.png";
function About() {
  return (
    <div className="wholeAboutDiv">
      <div className="aboutUsTitle">
        {" "}
       
      
      </div>
      <div className="aboutUsDiv">
        <div className="contentAboutusDiv">
        <h1>About Us</h1>
        <hr/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="aboutUsButton">Learn more</button>
        </div>
        <div>
          <img src={aboutUs} />
        </div>
      </div>
    </div>
  );
}

export default About;
