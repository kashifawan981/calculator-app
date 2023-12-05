import style from './CalcThemes.module.css';
import React, { useState, useEffect } from 'react';

export function CalcThemes({ onThemeChange }) {
  // State to manage the current theme
  const [theme, setTheme] = useState('theme1');

  // useEffect to update the body class when the component mounts and when theme changes.
  useEffect(() => {
    updateBodyClass(theme);
  }, [theme]);

  // Function to handle theme change.
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Propagate theme change to the parent component.
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

  // Function to render radio buttons based on the available themes
  const renderRadioButtons = () => {
    const themes = ['theme1', 'theme2', 'theme3'];

    return themes.map((themeOption, index) => (
      <input
        key={index}
        type="radio"
        aria-label="theme"
        name="theme-type"
        value={themeOption}
        id={themeOption}
        checked={theme === themeOption}
        onChange={() => handleToggleChange({ target: { value: themeOption } })}
      />
    ));
  };

  return (
    <nav className={`${style.themesContainer} ${style[theme]}`}>
      <h1>calc</h1>
      <div className={style.themes}>
        <div className={style.themeContainer}>
          {/* <p></p> */}
          <p>theme</p>
        </div>
        <div className={style.toggleContainer}>
          <div className={style.numbersContainer}>
            {[1, 2, 3].map((num) => (
              <p key={num}>{num}</p>
            ))}
          </div>
          <div className={style.toggle}>
            {renderRadioButtons()}
            <div className={style.ball}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CalcThemes;
