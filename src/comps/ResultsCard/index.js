import React from "react";
import Button from "../Button";

const ResultsCard = ({
  innerImg,
  dimNum,
  resultsCardIcon,
  resultsCardTitle,
  height,
  width,
  saveAs,
  convertedImage
}) => {
  return (
    <div className="resultsCardWrapper">
      <div className="resultsCardTitlePosition">
        <div className="resultsCardTitleSection">
          <div className="innerResultsCard">
            <img src={resultsCardIcon} className="resultsCardIcon" />
            <h2 className="resultsCardTitle">{resultsCardTitle}</h2>
          </div>
        </div>
      </div>
      <div className="resultsCard">
        <div className="leftCardSection">
          <img className="innerImg" src={innerImg} height={height} width={width}></img>
          <p className="dimNumTxt">Dimension: {dimNum}</p>
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
              placeholder="<embed> </embed>"
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
            onClick={() => {
              saveAs(convertedImage)
            }}
          />
        </div>
      </div>
    </div>
  );
};

ResultsCard.defaultProps = {
  dimNum: "",
  innerImg: "",
  resultsCardIcon:
    "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png",
  resultsCardTitle: "Default Title"
};

export default ResultsCard;
