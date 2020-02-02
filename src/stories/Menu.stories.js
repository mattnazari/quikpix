import React from "react";
import "../App.scss";

import Menu from "../comps/Menu";

export default {
  title: "Menus",
  components: Menu
};

export const HeaderMenu = () => {
  return <Menu />;
};

export const FooterMenu = () => {
  return <Menu />;
};
