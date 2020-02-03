import React from "react";
import Card from "../Card";
import FaChevronCircleDown from "react-icons/fa";

const CardWrapper = ({ type }) => {
  let cn;

  if (type === 'dropdown') {
    cn = 'dropdown'
  }

  return <div className='bar'>
    <FaChevronCircleDown />
    <div className={cn}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>;
};

CardWrapper.defaultProps = {};

export default CardWrapper;
