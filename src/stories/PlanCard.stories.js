import React from "react";
import "../App.scss";

import PlansCard from "../comps/PlansCard";

export default {
  title: "PlansCards",
  components: PlansCard
};

export const DefaultPlansCard = () => {
  return <PlansCard />;
};
