import React from "react";

const Card = ({ imgWidth, imgHeight, titleTxt, dimTxt, backgroundimg }) => {
  return (
    <div className="cardCont">
      <div
        className="image"
        style={{
          backgroundImage: backgroundimg,
          width: imgWidth,
          height: imgHeight
        }}
      ></div>
      <p className="titleText">{titleTxt}</p>
      <p className="dimText">{dimTxt}</p>
    </div>
  );
};

Card.defaultProps = {
  backgroundimg:
    "url('https://www.rabata.org/wp-content/uploads/2018/05/dummy.png')",
  imgWidth: "100px",
  imgHeight: "100px",
  titleTxt: "default title text",
  dimTxt: "default dim text"
};

export default Card;
