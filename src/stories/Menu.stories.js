import React from "react";
import "../App.scss";

import Menu from "../comps/Menu";

export default {
  title: "Menus",
  components: Menu
};

export const DefaultMenu = () => {
  return <Menu />;
};

export const HeaderMenu = () => {
  return <Menu items={headerItems} />;
};

export const FooterMenu = () => {
  return <Menu items={footerItems} />;
};

var headerItems = [
  {
    itemTitle: "Upgrade",
    itemTitleColor: "#101010"
  },
  {
    itemTitle: "Contact",
    itemTitleColor: "#101010"
  },
  {
    itemTitle: "Account",
    itemTitleColor: "#101010"
  }
];

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
