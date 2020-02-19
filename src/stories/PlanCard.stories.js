import React from "react";
import "../App.scss";

import PlansCard from "../comps/PlansCard";

export default {
  title: "PlansCards",
  components: PlansCard
};

export const DefaultPlansCard = () => {
  return (
    <PlansCard
      planCardH="623px"
      planCardW="306px"
      planPriceTopTxt="$3.99"
      planPriceBotTxt="per month"
      planPriceTxtFont="Poppins-SemiBold"
      planPriceTxtWeight="600"
      planPriceTxtSize="24px"
      planCardPadding="53px 20px 20px 20px"
      planTitle="Basic"
      topPlanImg="url('http://www.matthewnazari.ca/basicImg.svg')"
      topPlanImgH="153px"
      topPlanImgW="188px"
      planTitleColor="#115195"
      planTitleTopPosition="0"
      planCardTopPosition="205px"
    />
  );
};
