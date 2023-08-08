import style from "./CalcButton.module.css"

import React from "react";

export const CalcButton = ({ value, onClick }) => {
  return (
    <div >
      <button className={style.button} onClick={() => onClick(value)}>
        {value === "*" ? "x" : value}
      </button>
    </div>
  );
};

// export default CalcButton;
