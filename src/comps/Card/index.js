import React, { useState } from "react";
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
  onClick,
  isLocked
}) => {
  const [isChecked, setIsChecked] = useState(false)
  function ToggleChecked() {
    setIsChecked(!isChecked);
  }

  if (isChecked) {
    bgColor = "#31C1FF"
    bgImg = ""
    statusImg = "http://www.matthewnazari.ca/check.svg"
    statusImgW = "50px"
    statusImgH = "50px"
  }

  if (isLocked) {
    statusImg = "http://www.matthewnazari.ca/lock.svg"
    statusImgW = "50px"
    statusImgH = "50px"
    bgOpacity = "0.45"
    statusTxt = "Upgrade to unlock"
    titleTxtOp = "0.45"
    dimTxtOp = "0.45"
  }

  return (
    <div className="cardWrap" onClick={() => {
      onClick()
      if (!isLocked) {
        ToggleChecked();
      }
    }}>
      <div className="cardCont">
        <div
          className="card"
          style={{
            backgroundImage: `url(${bgImg})`,
            width: cardWidth,
            height: cardHeight,
            backgroundColor: bgColor,
            opacity: bgOpacity
          }}>
          <div
            className="statusImg"
            style={{
              backgroundImage: `url(${statusImg})`,
              width: statusImgW,
              height: statusImgH
            }}></div>
          <p className="statusTxt"
            style={{ fontSize: statusTxtSize, marginTop: statusTxtMTop }}>
            {statusTxt}
          </p>
        </div>

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
  bgImg: "https://www.rabata.org/wp-content/uploads/2018/05/dummy.png",
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
  statusTxtMTop: "",
  titleTxtOp: "",
  dimTxtOp: ""
};

export default Card;
