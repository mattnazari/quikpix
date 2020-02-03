import React from "react";
import "../App.scss";

import DropFile from "../comps/DropFile";

export default {
  title: "DropFile",
  components: DropFile
};

export const DefaultDropFile = () => {
  return <DropFile />;
};
