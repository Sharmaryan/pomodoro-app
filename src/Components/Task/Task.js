import React from "react";
import "./Task.css";
import { useTodo } from "../../context/todo-context";
import { useModal } from "../../context/modal-context";
export const Task = ({ item }) => {
  const { todoDispatch } = useTodo();
  const { dispatch } = useModal();

  const editHandler = (item) => {
     dispatch({ type: "HANDLE-EDIT", payload: true, item });
  };

  const deleteHandler = (id) => {
    todoDispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="task-single flex items-center my-2">
      <div className="task-name px-1 font-size-2">{item.task}</div>
      <div className="task-actions">
        <i className="fa fa-edit mx-1" onClick={() => editHandler(item)}></i>
        <i
          className="fa fa-trash mx-1"
          onClick={() => deleteHandler(item.id)}
        ></i>
      </div>
    </div>
  );
};
