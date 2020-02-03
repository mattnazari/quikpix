import React, { useState } from "react";
import Card from "../Card";
import { FaChevronCircleDown } from "react-icons/fa";

const CardWrapper = ({ type, title }) => {
  let cn;
  if (type === "dropdown") {
    cn = "dropdown";
  }

  let dim = <div></div>;
  const [visible, setVisible] = useState(false);
  if (visible) {
    dim = (
      <div className={cn}>
        <Card titleTxt="Profile Picture" />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }

  return (
    <div className="wrapCont">
      <div
        className="bar"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <h3>{title}</h3>
        <FaChevronCircleDown size={30} />
      </div>
      {dim}
    </div>
  );
};

CardWrapper.defaultProps = {
  type: "dropdown",
  title: "default title"
};

export default CardWrapper;
