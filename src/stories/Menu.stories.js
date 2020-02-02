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
    itemTitle: "Upgrade"
  },
  {
    itemTitle: "Contact"
  },
  {
    itemTitle: "Account"
  }
];

var footerItems = [
  {
    itemTitle: "Privacy and Terms"
  },
  {
    itemTitle: "About Us"
  },
  {
    itemTitle: "Contact Us"
  }
];
