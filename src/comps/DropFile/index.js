import React from "react";
import Button from "../Button";

const DropFile = ({ displayVis, mainImg, mainImgTxt, botTxt }) => {
  return (
    <div className="wrapper">
      <div className="mainContainer">
        <div className="mainImage" style={{ backgroundImage: mainImg }}></div>
        <div className="mainImageText"></div>
      </div>
      <div className="bottomText">{botTxt}</div>
      <Button buttonTitle="Upload" />
    </div>
  );
};

DropFile.defaultProps = {
  displayVis: "",
  mainImg: "url('../../assets/graphics/dropFileImg.svg')",
  mainImgTxt: "Drop your file or search file",
  botTxt: "Accepted file types: .PNG, .JPG, .JPEG, .TIFF, .GIF",
  bordradius: "0",
  bordstyle: "none",
  mainContWidth: "",
  mainContHeight: ""
};

export default DropFile;
