import React from "react";
import "../App.scss";

import Header from "../comps/Header";

export default {
  title: "Header",
  components: Header
};

export const defaultHeader = () => {
  return <Header />;
};
