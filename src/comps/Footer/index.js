import React from "react";
import Menu from "../Menu";

const Footer = () => {
  return (
    <div className="footerCont">
      <div className="footerItemsCont">
        <Menu items={footerItems} menuWidth="100vw" />
      </div>
      <div className="copyTextCont">
        <p className="copyText">
          © Copyright 2020 QuikPix. All rights reserved.
        </p>
      </div>
    </div>
  );
};

Footer.defaultProp = {};

var footerItems = [
  {
    itemTitle: "Privacy and Terms",
    itemTitleColor: "#FFFFFF"
  },
  {
    itemTitle: "About Us",
    itemTitleColor: "#FFFFFF"
  },
  {
    itemTitle: "Contact Us",
    itemTitleColor: "#FFFFFF"
  }
];

export default Footer;
