// Import necessary libraries and styles
import React, { useState, useEffect } from 'react';
import style from './CalcThemes.module.css';

const CalcThemes = ({ onThemeChange }) => {
  // State to manage the current theme
  const [theme, setTheme] = useState('theme1');

  // useEffect to update the body class when the component mounts and when theme changes.
  useEffect(() => {
    updateBodyClass(theme);
  }, [theme]);

  // Function to handle theme change.
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Propagate theme change to parent component.
    onThemeChange(newTheme);
  };

  // Function to update body class for global styling.
  const updateBodyClass = (selectedTheme) => {
    document.body.className = selectedTheme;
  };

  // Function to handle toggle switch change
  const handleToggleChange = (event) => {
    const newTheme = event.target.value;
    handleThemeChange(newTheme);
  };

  return (
    <main className={`${style.themesContainer} ${style[theme]}`}>
      <h2>calc</h2>
      <div className={style.themes}>
        <div className={style.themeContainer}>
          <p></p>
          <h3>theme</h3>
        </div>
        <div className={style.toggleContainer}>
          <div className={style.numbersContainer}>
            {[1, 2, 3].map((num) => (
              <p key={num}>{num}</p>
            ))}
          </div>
          <div className={style.toggle}>
            <input
              type="radio"
              name="theme-type"
              value="theme1"
              id="first"
              checked={theme === 'theme1'}
              onChange={() => handleToggleChange({ target: { value: 'theme1' } })}
            />
            <input
              type="radio"
              name="theme-type"
              value="theme2"
              id="second"
              checked={theme === 'theme2'}
              onChange={() => handleToggleChange({ target: { value: 'theme2' } })}
            />
            <input
              type="radio"
              name="theme-type"
              value="theme3"
              id="third"
              checked={theme === 'theme3'}
              onChange={() => handleToggleChange({ target: { value: 'theme3' } })}
            />
            <div className={style.ball}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalcThemes;
