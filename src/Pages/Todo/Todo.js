import React from "react";
import { Tasks } from "../../Components";
import './Todo.css';
export const Todo = () => {
  return (
    <div className="todo flex justify-center items-center flex-col">
      <div className="todo-greet font-size-3">welcome back</div>
      <div className="todo-tasks font-size-3">task left</div>
      <Tasks />
    </div>
  );
};
