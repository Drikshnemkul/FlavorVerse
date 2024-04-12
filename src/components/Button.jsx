import React from "react";

const Button = ({
  isDisable,
  btnType,
  containerStyle,
  textStyle,
  title,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      disabled={isDisable ?? false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && <div className="realtive w-8 h-8">{rightIcon}</div>}
    </button>
  );
};

export default Button;
