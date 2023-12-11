import React from 'react';
import style from './CalcScreen.module.css';

export function CalcScreen({ calculation = '', theme, characterLimit }) {
  const displayValue = (calculation || '0').replace('.', ',');

  // Apply character limit
  const limitedDisplayValue = displayValue.slice(0, characterLimit);

  return (
    <header className={`${style.screenContainer} ${style[theme]}`}>
      <div className={`${style.screen} ${style[theme]}`}>{limitedDisplayValue}</div>
    </header>
  );
}
