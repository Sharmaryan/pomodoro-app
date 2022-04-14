import React from "react";
import "./Navbar.css";
import { MdOutlineNightlightRound } from "react-icons/md";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="navbar-heading">
          pomodoro
        </Link>
      </h1>

      <div className="navbar-modes">
        <MdOutlineNightlightRound />
      </div>
    </div>
  );
};
