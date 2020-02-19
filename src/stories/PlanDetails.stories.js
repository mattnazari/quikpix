import React from "react";
import "../App.scss";

import PlanDetails from "../comps/PlanDetails";

export default {
  title: "PlanDetails",
  component: PlanDetails
};

export const DefaultPlanDetails = () => {
  return (
    <PlanDetails
      planIcon="http://www.matthewnazari.ca/planCheck.svg"
      planDetailsMainTxt="5 File Uploads"
      planDetailsBotTxt="per month"
      planDetailsML="20px"
    />
  );
};

export const PopularPlanDetails = () => {
  return (
    <PlanDetails
      planIcon="http://www.matthewnazari.ca/popularIcon.svg"
      planDetailsMainTxt="Most Popular"
      planDetailsBotTxt=""
      planDetailsML="9px"
      planTxtWeight="600"
      planTxtColor="#FFB647"
      planTxtFont="Poppins-SemiBold"
    />
  );
};
