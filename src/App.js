import "./App.scss";
import React, { useEffect, useState } from "react";
import Router from "./Routes/Router.js";
import { Header } from "./Components/Header/Header.js";
const App = () => {
  let [mode, setMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.parse(mode));
  }, [mode]);
  const handleToggle = () => {
    if (mode === true) {
      setMode(false);
    } else if (mode === false) {
      setMode(true);
    }
  };
  return (
    <React.Fragment>
      <div className={mode ? "dark" : "light"}>
        <Router />
        <Header />
        <div className="ThemeButton" onClick={handleToggle}>          
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
