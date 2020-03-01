import React from "react";

const Button = ({
  buttonTitle,
  buttonBgColor,
  buttonTextColor,
  buttonHeight,
  buttonWidth,
  buttonFontSize,
  buttonBorder,
  buttonRadius,
  buttonPosition,
  buttonMarginL,
  buttonBGImg,
  buttonPadding,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
        width: buttonWidth,
        height: buttonHeight,
        fontSize: buttonFontSize,
        border: buttonBorder,
        borderRadius: buttonRadius,
        position: buttonPosition,
        marginLeft: buttonMarginL,
        backgroundImage: buttonBGImg,
        padding: buttonPadding
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
  buttonBorder: "none",
  buttonRadius: "50px",
  buttonPosition: "",
  buttonMarginL: "",
  buttonBGImg: "",
  buttonPadding: "",
  onClick: () => {}
};

export default Button;
