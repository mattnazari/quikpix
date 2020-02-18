import React from "react";

const Card = ({
  imgWidth,
  imgHeight,
  titleTxt,
  dimTxt,
  bgImg,
  bgColor,
  innerImg,
  innerTxt,
  innerImgW,
  innerImgH,
  bgOpacity,
  innerTxtSize,
  innerTxtMTop,
  titleTxtOp,
  dimTxtOp
}) => {
  return (
    <div className="cardCont">
      <div className="imageCont">
        <div
          className="image"
          style={{
            backgroundImage: bgImg,
            width: imgWidth,
            height: imgHeight,
            backgroundColor: bgColor,
            opacity: bgOpacity
          }}
        ></div>
        <div
          className="innerImg"
          style={{
            backgroundImage: innerImg,
            width: innerImgW,
            height: innerImgH
          }}
        ></div>
        <p
          className="innerTxt"
          style={{ fontSize: innerTxtSize, marginTop: innerTxtMTop }}
        >
          {innerTxt}
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
  imgWidth: "100px",
  imgHeight: "100px",
  titleTxt: "default title text",
  dimTxt: "default dim text",
  bgColor: "",
  innerImg: "",
  innerTxt: "",
  innerImgH: "",
  innerImgW: "",
  bgOpacity: "",
  innerTxtSize: "12px",
  innerTxtMTop: "50px",
  titleTxtOp: "",
  dimTxtOp: ""
};

export default Card;
