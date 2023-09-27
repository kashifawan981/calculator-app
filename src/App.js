import style from "./App.module.css";

import React, { useState } from "react";
import * as math from "mathjs";

import { CalcKeypad } from "./components/CalcKeypad/CalcKeypad";
import { CalcScreen } from "./components/CalcScreen/CalcScreen";
import { CalcThemes } from "./components/CalcThemes/CalcThemes";

function App() {
  const [calculation, setCalculation] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (isResultDisplayed && !isNaN(value) && value !== '.') {
      setCalculation(value);
      setIsResultDisplayed(false);
    } else {
      if (value === '=') {
        try {
          const result = math.evaluate(calculation.replace(',', '.').replace('x', '*'));
          setCalculation(result.toString());
          setIsResultDisplayed(true);
        } catch (error) {
          setCalculation('Error');
        }
      } else if (value === '<=') {
        handleDelete();
      } else if (value === 'C') {
        handleReset();
      } else {
        setCalculation(calculation + value.replace(',', '.'));
        setIsResultDisplayed(false);
      }
    }
  }

  const handleDelete = () => {
    setCalculation(calculation.slice(0, -1));
  };

  const handleReset = () => {
    setCalculation("");
  };

  const [theme, setTheme] = useState("theme1");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`${style.page} ${style[theme]}`} theme={theme}>
      <CalcThemes onThemeChange={handleThemeChange}/>
      <CalcScreen calculation={calculation} theme={theme}/>
      <CalcKeypad
        handleButtonClick={handleButtonClick}
        handleDelete={handleDelete}
        handleReset={handleReset}
        theme={theme}
      />
    </div>
  );
}

export default App;
