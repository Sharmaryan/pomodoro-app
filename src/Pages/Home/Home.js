import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom';
import { useTheme } from "../../context";
export const Home = () => {
  const {theme} = useTheme();
  return (
    <div className={`home flex justify-center items-center flex-col ${theme} `}>
      <h2 className="home-heading font-size-2">
        Lack of direction, not lack of time, is the problem. We all have
        twenty-four hour days.
      </h2>
      <Link to='/tasks' className="home-btn">check your tasks</Link>
    </div>
  );
};
