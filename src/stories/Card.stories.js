import React from "react";
import "../App.scss";

import Card from "../comps/Card";

export default {
  title: "Cards",
  components: Card
};

export const DefaultCard = () => {
  return <Card />;
};
