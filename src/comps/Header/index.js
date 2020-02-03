import React from "react";
import Menu from "../Menu";

const Header = () => {
  return (
    <div className="headerCont">
      <div className="logo">QuikPix</div>
      <Menu items={headerItems} />
    </div>
  );
};

Header.defaultProps = {};

var headerItems = [
  {
    itemTitle: "Upgrade",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  },
  {
    itemTitle: "Contact",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  },
  {
    itemTitle: "Account",
    itemTitleColor: "#101010",
    itemWidth: "100px"
  }
];

export default Header;
