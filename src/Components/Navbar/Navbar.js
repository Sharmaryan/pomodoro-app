import React from "react";
import './Navbar.css';
export const Navbar = () => {
  return (
    <nav className="nav-menu px-1 py-1 sticky">
      <h1 className="nav-menu-logo font-size-2">Focus</h1>

      <div className="menu font-size-2">
        <i className="fa fa-moon-o"></i>
      </div>
    </nav>
  );
};
