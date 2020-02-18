import React from "react";
import Button from "../Button";

const ResultsCard = ({ innerImg, dimNum }) => {
  return (
    <div className="resultsCard">
      <div className="leftCardSection">
        <img className="innerImg" src={innerImg}></img>
        <p className="dimNumTxt">Dimension: {dimNum} px</p>
      </div>
      <div className="rightCardSection">
        <div className="copyInputTopCont">
          <input
            type="text"
            placeholder="link.quikpix.converted..."
            className="copyInput"
          />
          <Button
            buttonWidth="73px"
            buttonHeight="40px"
            buttonBgColor="#31C1FF"
            buttonTitle="Copy"
            buttonFontSize="12px"
            buttonRadius="10px"
            buttonPosition="absolute"
            buttonMarginL="-30px"
          />
        </div>
        <div className="copyInputBotCont">
          <input
            type="text"
            placeholder="link.quikpix.converted..."
            className="copyInput"
          />
          <Button
            buttonWidth="73px"
            buttonHeight="40px"
            buttonBgColor="#31C1FF"
            buttonTitle="Copy"
            buttonFontSize="12px"
            buttonRadius="10px"
            buttonMarginL="-30px"
          />
        </div>
        <Button
          buttonTitle="DOWNLOAD"
          buttonWidth="176px"
          buttonHeight="47px"
          buttonFontSize="16px"
        />
      </div>
    </div>
  );
};

ResultsCard.defaultProps = {
  dimNum: "",
  innerImg: ""
};

export default ResultsCard;
