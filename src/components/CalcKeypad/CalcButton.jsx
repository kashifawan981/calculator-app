import style from "./CalcButton.module.css";

import React from "react";

export const CalcButton = ({ value, onClick, theme }) => {
  const specialButtons = ["DEL"];
  let buttonClass;

  if (value === "RESET") {
    buttonClass = `${style.resetButton} ${style[theme + "-resetButton"]}`;
  } else if (value === "=") {
    buttonClass = `${style.equalButton} ${style[theme + "-equalButton"]}`;
  } else if (specialButtons.includes(value)) {
    if (value === "DEL") {
      buttonClass = style.deleteButton;
    }
  } else {
    buttonClass = style.regButton;
  }

  return (
    <div>
      <button className={buttonClass} onClick={() => onClick(value)}>
        {value === "*" ? "x" : value}
      </button>
    </div>
  );
};
