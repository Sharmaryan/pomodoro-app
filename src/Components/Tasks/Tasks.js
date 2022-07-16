import React from "react";
import { Task } from "../Task/Task";
import "./Tasks.css";
import { useTodo } from "../../context/todo-context";
import { useModal } from "../../context/modal-context";
export const Tasks = () => {
  const clickHandler = () => {
    dispatch({ type: "HANDLE-MODAL" });
  };

  const { todoList } = useTodo();
  const { dispatch } = useModal();

  return (
    <div className="tasks">
      <div className="flex my-2">
        <h3 className="tasks-heading mx-2 font-size-2">Tasks</h3>
        <i className="fa fa-plus tasks-add mx-2 " onClick={clickHandler}></i>
      </div>
      <div className="tasks-list mx-2">
        {todoList.map((item) => (
          <Task item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};
