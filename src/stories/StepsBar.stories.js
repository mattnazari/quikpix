import React from "react";
import "../App.scss";

import StepsBar from "../comps/StepsBar";

export default {
  title: "StepsBar",
  component: StepsBar
};

export const UploadStepsBar = () => {
  return (
    <StepsBar
      uploadColor="#31C1FF"
      chooseColor="#5C5C5C"
      convertColor="#5C5C5C"
      uploadCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      chooseCheck="http://www.matthewnazari.ca/stepsCheck2nd.svg"
      convertCheck="http://www.matthewnazari.ca/stepsCheck2nd.svg"
      firstBLColor="#DAF4FF"
      secondBLColor="#DAF4FF"
    />
  );
};

export const ChooseStepsBar = () => {
  return (
    <StepsBar
      uploadColor="#5C5C5C"
      chooseColor="#31C1FF"
      convertColor="#5C5C5C"
      uploadCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      chooseCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      convertCheck="http://www.matthewnazari.ca/stepsCheck2nd.svg"
      firstBLColor="#31C1FF"
      secondBLColor="#DAF4FF"
    />
  );
};

export const ConvertStepsBar = () => {
  return (
    <StepsBar
      uploadColor="#5C5C5C"
      chooseColor="#5C5C5C"
      convertColor="#31C1FF"
      uploadCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      chooseCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      convertCheck="http://www.matthewnazari.ca/stepsCheck.svg"
      firstBLColor="#31C1FF"
      secondBLColor="#31C1FF"
    />
  );
};
