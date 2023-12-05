import React from 'react';
import style from './CalcButton.module.css';

const getButtonClass = (value, theme) => {
  if (value === 'RESET') {
    return `${style.resetButton} ${style[theme + '-resetButton']}`;
  } else if (value === '=') {
    return `${style.equalButton} ${style[theme + '-equalButton']}`;
  } else if (value === 'DEL') {
    return `${style.deleteButton} ${style[theme + '-deleteButton']}`;
  } else {
    return `${style.regButton} ${style[theme + '-regButton']}`;
  }
};

export function CalcButton({ value, onClick, theme }) {
  const buttonClass = getButtonClass(value, theme);
  return (
    <div>
      <button className={buttonClass} onClick={() => onClick(value)}>
        {value === '*' ? 'x' : value}
      </button>
    </div>
  );
}
