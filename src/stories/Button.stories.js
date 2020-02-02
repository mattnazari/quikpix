import React from "react";
import "../App.scss";

import Button from "../comps/Button";

export default {
  title: "Buttons",
  component: Button
};

export const DefaultButton = () => {
  return <Button />;
};

export const ConvertButton = () => {
  return <Button buttonTitle="CONVERT" />;
};
