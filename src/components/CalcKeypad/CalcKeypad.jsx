import React from 'react';
import { CalcButton } from './CalcButton';
import style from './CalcKeypad.module.css';

// Function to generate CalcButton components based on buttonValues array
const generateButtons = (
  buttonValues,
  handleButtonClick,
  handleDelete,
  handleReset,
  theme
) => {
  return buttonValues.map((value) => (
    <CalcButton
      key={value}
      value={value}
      onClick={value === 'DEL' ? handleDelete : handleButtonClick}
      theme={theme}
    />
  ));
};

export function CalcKeypad({
  handleButtonClick,
  handleDelete,
  handleReset,
  theme,
}) {
  const buttonValues = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    '*',
  ];

  return (
    <section className={`${style.keypadContainer} ${style[theme]}`}>
      <div className={style.buttonsContainer}>
        {generateButtons(
          buttonValues,
          handleButtonClick,
          handleDelete,
          handleReset,
          theme
        )}
      </div>
      <div className={style.buttonsContainer2}>
        <CalcButton value="RESET" onClick={handleReset} theme={theme} />
        <CalcButton value="=" onClick={handleButtonClick} theme={theme} />
      </div>
    </section>
  );
}
