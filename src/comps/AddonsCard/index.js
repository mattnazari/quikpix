import React from "react";
import PlanDetails from "../PlanDetails";

const AddonsCard = ({ addonsTitle, addonPriceTopTxt, addonPriceBotTxt }) => {
  return (
    <div className="addonsCardWrapper">
      <div className="addonsCard">
        <div className="addonsTopSection">
          <h2 className="addonsTitle">{addonsTitle}</h2>
        </div>
        <div className="addonsBotSection">
          <div className="addonDetails">
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="Single Additional Upload"
              planDetailsBotTxt=""
              planDetailsML="20px"
              planDetailsMT="25px"
            />
            <PlanDetails
              planIcon="http://www.matthewnazari.ca/planCheck.svg"
              planDetailsMainTxt="Unlimited Dimension"
              planDetailsBotTxt=""
              planDetailsML="20px"
              planDetailsMT="25px"
            />
          </div>
          <div className="addonPrice">
            <p className="addonPriceTopTxt">{addonPriceTopTxt}</p>
            <p className="addonPriceBotTxt">{addonPriceBotTxt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AddonsCard.defaultProps = {
  addonsTitle: "",
  addonPriceTopTxt: "",
  addonPriceBotTxt: ""
};

export default AddonsCard;
