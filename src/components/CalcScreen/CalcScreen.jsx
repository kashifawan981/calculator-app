import style from "./CalcScreen.module.css";
import React from "react";

export const CalcScreen = ({ calculation, theme }) => {
  const displayValue = calculation === '' ? '0' : calculation.replace('.', ',');
  return (
    <div className={`${style.screenContainer} ${style[theme]}`}>
      <div className={`${style.screen} ${style[theme]}`}>{displayValue}</div>
    </div>
  );
};
