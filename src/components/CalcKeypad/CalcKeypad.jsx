import style from "./CalcKeypad.module.css";

import React from "react";
import { CalcButton } from "./CalcButton";

export const CalcKeypad = ({
  handleButtonClick,
  handleDelete,
  handleReset,
}) => {
  const buttonValues = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
    "RESET",
    "=",
  ];

  return (
    <div className={style.keypadContainer}>
      <div className={style.buttonsContainer}>
        {buttonValues.map((value) => (
          <CalcButton
            key={value}
            value={value}
            onClick={
              value === "RESET"
                ? handleReset
                : value === "DEL"
                ? handleDelete
                : handleButtonClick
            }
          />
        ))}
      </div>
    </div>
  );
};

// export default CalcKeypad;
