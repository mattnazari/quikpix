import React from "react";

const PlansCard = ({
  planTitle,
  popularIcon,
  topPlanImg,
  popularIconW,
  popularIconH,
  topPlanImgW,
  topPlanImgH,
  popularTxt
}) => {
  return (
    <div className="planCardWrapper">
      <h2>{planTitle}</h2>
      <img
        src={topPlanImg}
        style={{ width: topPlanImgW, height: topPlanImgH }}
      />
      <div className="planCard">
        <div className="popularCont">
          <img
            src={popularIcon}
            style={{ width: popularIconW, height: popularIconH }}
          />
          <p>{popularTxt}</p>
        </div>
        <div className="planDetailsCont"></div>
      </div>
    </div>
  );
};

PlansCard.defaultProps = {
  popularIcon: "",
  popularIconW: "",
  popularIconH: "",
  planTitle: "",
  topPlanImgH: "",
  topPlanImgW: "",
  popularTxt: ""
};

export default PlansCard;
