import React from "react";

const PlanDetails = ({
  planIcon,
  planDetailsMainTxt,
  planDetailsBotTxt,
  planTxtColor,
  planTxtWeight,
  planDetailsML,
  planTxtFont
}) => {
  return (
    <div className="planDetailsWrapper">
      <div className="planDetailsRow">
        <img src={planIcon} className="planIcon" />
        <div
          className="planDetailsColumn"
          style={{ marginLeft: planDetailsML }}
        >
          <p
            className="planDetailsMainTxt"
            style={{
              color: planTxtColor,
              fontWeight: planTxtWeight,
              fontFamily: planTxtFont
            }}
          >
            {planDetailsMainTxt}
          </p>
          <p className="planDetailsBotTxt">{planDetailsBotTxt}</p>
        </div>
      </div>
    </div>
  );
};

PlanDetails.defaultProps = {
  planIcon: "",
  planDetailsMainTxt: "",
  planDetailsBotTxt: "",
  planTxtColor: "",
  planTxtWeight: "",
  planDetailsML: "",
  planTxtFont: ""
};

export default PlanDetails;
