import * as math from 'mathjs';
import style from './App.module.css';
import React, { useEffect, useState } from 'react';
import { CalcKeypad } from './components/CalcKeypad/CalcKeypad';
import { CalcScreen } from './components/CalcScreen/CalcScreen';
import CalcThemes from './components/CalcThemes/CalcThemes';

function App() {
  // State variables for calculation, result display, and theme.
  const [calculation, setCalculation] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);
  const [theme, setTheme] = useState('theme1');

  // Function to update the body class based on the selected theme.
  const updateBodyClass = (selectedTheme) => {
    document.body.className = selectedTheme;
  };

  // useEffect hook to update the body class when the theme changes.
  useEffect(() => {
    updateBodyClass(theme);
  }, [theme]);

  // Handler function for button clicks.
  const handleButtonClick = (value) => {
    if (isResultDisplayed && !isNaN(value) && value !== '.') {
      // If result is displayed and the clicked value is a number, start a new calculation.
      setCalculation(value);
      setIsResultDisplayed(false);
    } else {
      // Handle different button actions.
      value === '='
        ? handleEquals()
        : value === '<='
        ? handleDelete()
        : value === 'C'
        ? handleReset()
        : handleRegularButton(value);
    }
  };

  // Handler function for equals button (=).
  const handleEquals = () => {
    try {
      // Evaluate the calculation and display the result.
      const result = math.evaluate(
        calculation.replace(',', '.').replace('x', '*')
      );
      setCalculation(result.toString());
      setIsResultDisplayed(true);
    } catch (error) {
      // Handle errors during evaluation.
      setCalculation('Error');
    }
  };

  // Handler function for regular buttons (numbers and operators).
  const handleRegularButton = (value) => {
    // Append the clicked value to the current calculation
    setCalculation(calculation + value.replace(',', '.'));
    setIsResultDisplayed(false);
  };

  // Handler function for delete button (<=).
  const handleDelete = () => {
    // Remove the last character from the calculation.
    setCalculation(calculation.slice(0, -1));
  };

  // Handler function for reset button (C).
  const handleReset = () => {
    // Reset the entire calculation.
    setCalculation('');
  };

  // Handler function for theme change.
  const handleThemeChange = (newTheme) => {
    // Update the theme when the user selects a different theme.
    setTheme(newTheme);
  };

  return (
    <div className={`${style.page} ${style[theme]}`} theme={theme}>
      <CalcThemes onThemeChange={handleThemeChange} />
      <CalcScreen calculation={calculation} theme={theme} characterLimit={15}/>
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
