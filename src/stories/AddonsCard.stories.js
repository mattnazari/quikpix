import React from "react";
import "../App.scss";

import AddonsCard from "../comps/AddonsCard";

export default {
  title: "AddonsCard",
  components: AddonsCard
};

export const DefaultAddonsCard = () => {
  return (
    <AddonsCard
      addonPriceTopTxt="$2.99"
      addonPriceBotTxt="per upload"
      addonsTitle="Unlimited Dimensions"
    />
  );
};
