import React from "react";
import Button from "../Button";

const Card = ({
  cardWidth,
  cardHeight,
  titleTxt,
  dimTxt,
  bgImg,
  bgColor,
  statusImg,
  statusTxt,
  statusImgW,
  statusImgH,
  bgOpacity,
  statusTxtSize,
  statusTxtMTop,
  titleTxtOp,
  dimTxtOp,
  onClick
}) => {
  return (
    <div className="cardWrap" onClick={onClick}>
      <div className="cardCont">
        <div
          className="card"
          style={{
            backgroundImage: bgImg,
            width: cardWidth,
            height: cardHeight,
            backgroundColor: bgColor,
            opacity: bgOpacity
          }}
        ></div>
        <div
          className="statusImg"
          style={{
            backgroundImage: statusImg,
            width: statusImgW,
            height: statusImgH
          }}
        ></div>
        <p
          className="statusTxt"
          style={{ fontSize: statusTxtSize, marginTop: statusTxtMTop }}
        >
          {statusTxt}
        </p>
      </div>

      <p className="titleText" style={{ opacity: titleTxtOp }}>
        {titleTxt}
      </p>
      <p className="dimText" style={{ opacity: dimTxtOp }}>
        {dimTxt}
      </p>
    </div>
  );
};

Card.defaultProps = {
  bgImg: "url('https://www.rabata.org/wp-content/uploads/2018/05/dummy.png')",
  cardWidth: "100px",
  cardHeight: "100px",
  titleTxt: "default title text",
  dimTxt: "default dim text",
  bgColor: "",
  statusImg: "",
  statusTxt: "",
  statusImgH: "",
  statusImgW: "",
  bgOpacity: "",
  statusTxtSize: "12px",
  statusTxtMTop: "50px",
  titleTxtOp: "",
  dimTxtOp: ""
};

export default Card;
