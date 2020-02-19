import React from "react";

const StepsBar = ({
  uploadColor,
  uploadCheck,
  chooseColor,
  chooseCheck,
  convertColor,
  convertCheck,
  firstBLColor,
  secondBLColor
}) => {
  return (
    <div className="stepsBarWrapper">
      <div className="stepsBarCont">
        <div className="stepsBarColumn">
          <p className="stepTxt">Step 1</p>
          <h2 className="upload stepTitleTxt" style={{ color: uploadColor }}>
            Upload
          </h2>
          <img src={uploadCheck} />
        </div>
        <div
          className="blueLine"
          style={{ backgroundColor: firstBLColor }}
        ></div>
        <div className="stepsBarColumn">
          <p className="stepTxt">Step 2</p>
          <h2 className="choose stepTitleTxt" style={{ color: chooseColor }}>
            Choose
          </h2>
          <img src={chooseCheck} />
        </div>
        <div
          className="blueLine"
          style={{ backgroundColor: secondBLColor }}
        ></div>
        <div className="stepsBarColumn">
          <p className="stepTxt">Step 3</p>
          <h2 className="Convert stepTitleTxt" style={{ color: convertColor }}>
            Convert
          </h2>
          <img src={convertCheck} />
        </div>
      </div>
    </div>
  );
};

StepsBar.defaultProps = {
  uploadColor: "",
  uploadCheck: "",
  chooseColor: "",
  chooseCheck: "",
  convertColor: "",
  convertCheck: "",
  firstBLColor: "",
  secondBLColor: ""
};

export default StepsBar;
