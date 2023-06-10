import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const changeTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className={`App ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <h1>Current theme: {isLightTheme ? "Light" : "Dark"}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={changeTheme}>Toggle theme</button>
    </div>
  );
}
