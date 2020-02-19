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

export const ConvertAnotherButton = () => {
  return (
    <Button
      buttonTitle="CONVERT ANOTHER FILE"
      buttonBgColor="#31C1FF"
      buttonWidth="400px"
      buttonHeight="80px"
    />
  );
};

export const BackToHomeButton = () => {
  return (
    <Button
      buttonTitle="BACK TO HOME"
      buttonBgColor="transparent"
      buttonTextColor="#FFB647"
      buttonBorder="2px solid #FFB647"
    />
  );
};

export const DownButton = () => {
  return (
    <Button
      buttonTitle=""
      buttonBGImg="url('http://www.matthewnazari.ca/downButton.svg')"
      buttonWidth="48px"
      buttonHeight="48px"
    />
  );
};
