import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLORS = ["primary", "red ", "green", "red"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
    const checkButtonStyles=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] 
    const checkButtonColor=COLORS.includes(buttonColor) ? buttonColor : null 
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0] 
  return (
    <button
      className={`btn ${checkButtonStyles} ${checkButtonColor} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >{children}</button>
  );
};
