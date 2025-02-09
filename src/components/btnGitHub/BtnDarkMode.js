import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorange";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark", "light");

  const btnRef = useRef(null);

  useEffect(() => {
    console.log("Use effect Fired");
    console.log(darkMode);

    if (darkMode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);

  const taggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={taggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
