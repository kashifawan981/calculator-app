import style from "./CalcThemes.module.css";

export function CalcThemes() {
  return (
    <main className={style.themesContainer}>
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
            <p></p>
          </div>
        </div>
      </div>
    </main>
  );
}
