import React from "react";
import { Tasks, Modal } from "../../Components";
import { useModal } from "../../context/modal-context";
import "./Todo.css";
export const Todo = () => {
  const { modal } = useModal();
  return (
    <div className="todo flex justify-center items-center flex-col">
      {modal && <Modal />}
      <div className="todo-greet font-size-3">welcome back</div>
      <div className="todo-tasks font-size-3">task left</div>
      <Tasks />
    </div>
  );
};
