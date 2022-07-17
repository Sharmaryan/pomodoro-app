import React from "react";
import { useTheme } from "../../context";
import "./Navbar.css";
export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const themeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };



  return (
    <nav className={`nav-menu px-1 py-1 sticky ${theme}`}>
      <h1 className="nav-menu-logo font-size-2">Focus</h1>

      <div className="menu font-size-2 ">
        {theme === "dark" ? (
          <i className="fa fa-sun-o" onClick={themeHandler}></i>
        ) : (
          <i className="fa fa-moon-o" onClick={themeHandler}></i>
        )}
      </div>
    </nav>
  );
};
