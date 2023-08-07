import style from "./App.module.css";

import { CalcKeypad } from "./components/CalcKeypad/CalcKeypad";
import { CalcScreen } from "./components/CalcScreen/CalcScreen";
import { CalcThemes } from "./components/CalcThemes/CalcThemes";

function App() {
  return (
    <div className={style.page}>
      <CalcThemes />
      <CalcScreen />
      <CalcKeypad />
    </div>
  );
}

export default App;
