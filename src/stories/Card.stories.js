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

export const checkedCard = () => {
  return (
    <Card
      bgColor="#31C1FF"
      bgImg=""
      innerImg="url('http://www.matthewnazari.ca/check.svg')"
      innerImgW="50px"
      innerImgH="50px"
    />
  );
};

export const lockedCard = () => {
  return (
    <Card
      imgWidth="140px"
      imgHeight="240px"
      innerImg="url('http://www.matthewnazari.ca/lock.svg')"
      innerImgW="50px"
      innerImgH="50px"
      bgOpacity="0.2"
      innerTxt="Upgrade to unlock"
      titleTxtOp="0.2"
      dimTxtOp="0.2"
    />
  );
};
