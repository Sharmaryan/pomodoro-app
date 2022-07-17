import React from "react";
import { Tasks, Modal } from "../../Components";
import { useTheme, useTodo, useModal } from "../../context";
import "./Todo.css";
export const Todo = () => {
  const { modal } = useModal();
  const {todoList} = useTodo();
  const {theme} = useTheme();
  const taskLeft = (todoList.length > 0) ? `${todoList.length} tasks left` : `No, task left` ;
  return (
    <div className={`todo flex justify-center items-center flex-col ${theme}`}>
      {modal && <Modal />}
      <div className="todo-greet font-size-3">welcome back</div>
      <div className="todo-tasks font-size-3"> {taskLeft}</div>
      <Tasks />
    </div>
  );
};
