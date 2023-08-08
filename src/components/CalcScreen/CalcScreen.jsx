import style from "./CalcScreen.module.css";

import React from "react";

export const CalcScreen = ({ calculation }) => {
  const displayValue = calculation === '' ? '0' : calculation.replace('.', ',');
  return (
    <div className={style.screenContainer}>
      <div className={style.screen}>{displayValue}</div>
    </div>
  );
};

// export default CalcScreen;
