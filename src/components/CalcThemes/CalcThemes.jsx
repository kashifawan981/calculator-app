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
  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
    // Propagate theme change to parent component.
    onThemeChange(newTheme);
  };

  // Function to update body class for global styling.
  const updateBodyClass = (selectedTheme) => {
    document.body.className = selectedTheme;
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
            {[1, 2, 3].map((num) => (
              <input
                key={num}
                type="radio"
                name="theme-type"
                value={`theme${num}`}
                id={`theme${num}`}
                checked={theme === `theme${num}`}
                onChange={handleThemeChange}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CalcThemes;
