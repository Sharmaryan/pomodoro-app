import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home flex justify-center items-center flex-col">
      <h2 className="home-heading font-size-2">
        Lack of direction, not lack of time, is the problem. We all have
        twenty-four hour days.
      </h2>
      <button className="btn home-btn">check your tasks</button>
    </div>
  );
};
