import style from "./CalcButton.module.css"

import React from "react";

export const CalcButton = ({ value, onClick }) => {


  const specialButtons = ['RESET', 'DEL', '='];
  let buttonClass;

  if (specialButtons.includes(value)) {
    if (value === 'RESET') {
      buttonClass = style.blueButtons;
    } else if (value === 'DEL') {
      buttonClass = style.blueButtons;
    } else if (value === '=') {
      buttonClass = style.redButton;
    }
  } else {
    buttonClass = style.regButton;
  }

  return (
    <div >
      <button className={buttonClass} onClick={() => onClick(value)}>
        {value === "*" ? "x" : value}
      </button>
    </div>
  );
};

// export default CalcButton;
