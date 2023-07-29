import React from "react";
import email from "./images/email.png"
import fax from "./images/fax.png"
import location from "./images/location.png"
import phone from "./images/phone.png"

function Help() {
  return (
    <div className="helpDiv">
      <div className="howCanHelpDiv">
        <h1>How can we help you ?</h1>
      </div>
      <div className="helpContent">
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
      <div className="helpDetaDetailsDiv">
        <div className="officeNumberDiv">
          <div className="eachHelpDiv1">
            <div className="locationDiv"><img src={location}/></div>
            <p>our main office</p>
            <p className="contentDivP">aliquip ex ea commodo r15</p>
          </div>
          <div className="eachHelpDiv1">
          <div className="locationDiv"><img src={phone}/></div>
            <p>Phone number</p>
            <p className="contentDivP">022-42343242</p>
          </div>
        </div>
        <div className="faxEmailDiv">
          <div className="eachHelpDiv1">
          <div className="locationDiv"><img src={fax}/></div>
            <p>Fax</p>
            <p className="contentDivP">12-34342-8900</p>
          </div>
          <div className="eachHelpDiv1">
          <div className="locationDiv"><img src={email}/></div>
            <p>Email</p>
            <p className="contentDivP">hello@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
