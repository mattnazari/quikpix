import React from "react";
import "../App.scss";

import CardWrapper from "../comps/CardWrapper";

export default {
  title: "CardWrapper",
  components: CardWrapper
};

export const DropdownCardWrapper = () => {
  return <CardWrapper type='dropdown' title='Instagram' />;
};
