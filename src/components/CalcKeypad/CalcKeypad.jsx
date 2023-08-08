import style from "./CalcKeypad.module.css";

export function CalcKeypad() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("The button is clicked");
  };

  return (
    <main className={style.keypadContainer}>
      <div className={style.buttonsContainer}>
        <button onClick={handleClick}>7</button>
        <button>8</button>
        <button>9</button>
        <button>del</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button>reset</button>
        <button>=</button>
      </div>
    </main>
  );
}
