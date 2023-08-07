import style from "./App.module.css";

import { CalcButtons } from "./components/CalcButtons/CalcButtons";
import { CalcScreen } from "./components/CalcScreen/CalcScreen";
import { CalcThemes } from "./components/CalcThemes/CalcThemes";

function App() {
  return (
    <div className={style.page}>
      <CalcThemes />
      <CalcScreen />
      <CalcButtons />
    </div>
  );
}

export default App;
