import React from "react";
import Button from "../Button";
import PlanDetails from "../PlanDetails";

const PlansCard = ({
  planTitle,
  topPlanImg,
  topPlanImgW,
  topPlanImgH,
  planCardW,
  planCardH,
  planCardPadding,
  planPriceTopTxt,
  planPriceBotTxt,
  planPriceTxtWeight,
  planPriceTxtFont,
  planPriceTxtSize,
  planTitleColor,
  planTitleTopPosition,
  planCardTopPosition
}) => {
  return (
    <div className="planCardWrapper">
      <div className="planTitlePosition" style={{ top: planTitleTopPosition }}>
        <div className="planTitleCont">
          <h2 style={{ color: planTitleColor }} className="planTitle">
            {planTitle}
          </h2>
          <div
            style={{
              width: topPlanImgW,
              height: topPlanImgH,
              backgroundImage: topPlanImg
            }}
          />
        </div>
      </div>
      <div className="planCardPosition" style={{ top: planCardTopPosition }}>
        <div
          className="planCard"
          style={{
            width: planCardW,
            height: planCardH,
            padding: planCardPadding
          }}
        >
          <PlanDetails
            planIcon="http://www.matthewnazari.ca/popularIcon.svg"
            planDetailsMainTxt="Most Popular"
            planDetailsBotTxt=""
            planDetailsML="9px"
            planTxtWeight="600"
            planTxtColor="#FFB647"
            planTxtFont="Poppins-SemiBold"
          />
          <div className="planDetailsCont">
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="5 File Uploads"
              planDetailsBotTxt="per month"
              planDetailsML="20px"
              planDetailsMT="25px"
            />
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="5 Dimensions"
              planDetailsBotTxt="per upload"
              planDetailsML="20px"
              planDetailsMT="25px"
            />
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="5 Platforms"
              planDetailsBotTxt="to choose from"
              planDetailsML="20px"
              planDetailsMT="25px"
            />
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="Access to past uploads"
              planDetailsBotTxt="through dashboard"
              planDetailsML="20px"
              planDetailsMT="25px"
            />
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="store up to 10 GB"
              planDetailsBotTxt=""
              planDetailsML="20px"
              planDetailsMT="25px"
            />
          </div>
          <div className="planPrice">
            <p
              className="planPriceTopTxt"
              style={{
                fontWeight: planPriceTxtWeight,
                fontFamily: planPriceTxtFont,
                fontSize: planPriceTxtSize
              }}
            >
              {planPriceTopTxt}
            </p>
            <p className="planPriceBotTxt">{planPriceBotTxt}</p>
          </div>
          <Button
            buttonTitle="Select"
            buttonWidth="164px"
            buttonHeight="48px"
            buttonFontSize="18px"
          />
        </div>
      </div>
    </div>
  );
};

PlansCard.defaultProps = {
  planTitle: "",
  topPlanImgH: "",
  topPlanImgW: "",
  topPlanImg: "",
  planCardW: "",
  planCardH: "",
  planCardPadding: "",
  planPriceTopTxt: "",
  planPriceBotTxt: "",
  planPriceTxtWeight: "",
  planPriceTxtFont: "",
  planPriceTxtSize: "",
  planTitleColor: "",
  planTitleTopPosition: "",
  planCardTopPosition: ""
};

export default PlansCard;
