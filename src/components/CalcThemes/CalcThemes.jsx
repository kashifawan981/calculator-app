import React, { useState } from "react";
import style from "./CalcThemes.module.css";

export function CalcThemes() {
  const [theme, setTheme] = useState("theme1");

  const handleThemeChange = (event) => {
    const newTheme = event.target.value;
    setTheme(newTheme);
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
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className={style.toggle}>
            <input
              type="radio"
              name="theme-type"
              value="theme1"
              id="first"
              checked={theme === "theme1"}
              onChange={handleThemeChange}
            />
            <input
              type="radio"
              name="theme-type"
              value="theme2"
              id="second"
              checked={theme === "theme2"}
              onChange={handleThemeChange}
            />
            <input
              type="radio"
              name="theme-type"
              value="theme3"
              id="third"
              checked={theme === "theme3"}
              onChange={handleThemeChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
