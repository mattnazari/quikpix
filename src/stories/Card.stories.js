import React from "react";
import "../App.scss";

import Card from "../comps/Card";

export default {
  title: "Cards",
  components: Card
};

export const DefaultCard = () => {
  return <Card />;
};

export const ProfileCard = () => {
  return (
    <Card
      imgWidth="76px"
      imgHeight="76px"
      titleTxt="Profile Picture"
      dimTxt="110 x 110 px"
    />
  );
};
