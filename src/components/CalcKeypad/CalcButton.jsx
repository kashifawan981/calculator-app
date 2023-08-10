import style from "./CalcButton.module.css";

import React from "react";

export const CalcButton = ({ value, onClick }) => {
  const specialButtons = ["DEL"];
  let buttonClass;

  if (value === "RESET") {
    buttonClass = style.resetButton;
  } else if (value === "=") {
    buttonClass = style.equalButton;
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
