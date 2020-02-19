import React from "react";
import "../App.scss";

import ResultsCard from "../comps/ResultsCard";

export default {
  title: "ResultsCards",
  components: ResultsCard
};

export const DefaultResultsCard = () => {
  return (
    <ResultsCard
      innerImg="http://www.matthewnazari.ca/DummyImg.svg"
      dimNum="1584 x 396"
    />
  );
};
