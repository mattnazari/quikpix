import React, { useState } from "react";
import Card from "../Card";
import { IoIosArrowDropdownCircle, IoIosArrowDropdown } from "react-icons/io";

const CardWrapper = ({ type, title, mediaIcon }) => {
  let cn;
  if (type === "dropdown") {
    cn = "dropdown";
  }

  let icon = <IoIosArrowDropdown size={32} color={"31C1FF"} />;
  const [visible, setVisible] = useState(false);
  if (visible) {
    cn = "dropdown dropdown_active";
    icon = <IoIosArrowDropdownCircle size={32} color={"31C1FF"} />;
  }

  return (
    <div className="wrapCont">
      <div
        className="bar"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <div className="row">
          <img src={mediaIcon} height="32" />
          <h3>{title}</h3>
        </div>
        {icon}
      </div>
      <div className={cn}>
        <Card titleTxt="Profile Picture" />
        <Card />
        <Card
          cardHeight="400px"
          cardWidth="200px"
          titleTxt="Stories"
          dimTxt="This is custom text"
        />
        <Card />
        <Card />
      </div>
    </div>
  );
};

CardWrapper.defaultProps = {
  type: "dropdown",
  title: "default title",
  mediaIcon: null
};

export default CardWrapper;
