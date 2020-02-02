import React from "react";

const Button = ({
  buttonTitle,
  buttonBgColor,
  buttonTextColor,
  buttonHeight,
  buttonWidth,
  buttonFontSize,
  buttonBorder
}) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
        width: buttonWidth,
        height: buttonHeight,
        fontSize: buttonFontSize,
        border: buttonBorder
      }}
    >
      {buttonTitle}
    </button>
  );
};

Button.defaultProps = {
  buttonTitle: "default title",
  buttonBgColor: "#FFB647",
  buttonTextColor: "#FFFFFF",
  buttonWidth: "233px",
  buttonHeight: "62px",
  buttonFontSize: "18pt",
  buttonBorder: "none"
};

export default Button;
