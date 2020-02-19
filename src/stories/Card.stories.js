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
      cardWidth="76px"
      cardHeight="76px"
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
      statusImg="url('http://www.matthewnazari.ca/check.svg')"
      statusImgW="50px"
      statusImgH="50px"
    />
  );
};

export const lockedCard = () => {
  return (
    <Card
      cardWidth="140px"
      cardHeight="240px"
      statusImg="url('http://www.matthewnazari.ca/lock.svg')"
      statusImgW="50px"
      statusImgH="50px"
      bgOpacity="0.2"
      statusTxt="Upgrade to unlock"
      titleTxtOp="0.2"
      dimTxtOp="0.2"
    />
  );
};
