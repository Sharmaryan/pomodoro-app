import React from "react";
import "./Home.css";
import {Link} from 'react-router-dom';
export const Home = () => {
  return (
    <div className="home flex justify-center items-center flex-col">
      <h2 className="home-heading font-size-2">
        Lack of direction, not lack of time, is the problem. We all have
        twenty-four hour days.
      </h2>
      <Link to='/tasks' className="btn home-btn">check your tasks</Link>
    </div>
  );
};
