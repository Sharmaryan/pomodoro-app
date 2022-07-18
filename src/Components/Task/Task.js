import React from "react";
import "./Task.css";
import { Link } from "react-router-dom";
import { useModal, useTodo, useTheme } from "../../context";
export const Task = ({ item }) => {
  const { todoDispatch } = useTodo();
  const { dispatch } = useModal();
  const { theme } = useTheme();
 

  const editHandler = (item) => {
    dispatch({ type: "HANDLE-EDIT", payload: true, item });
  };

  const deleteHandler = (id) => {
    todoDispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className={`task-single flex items-center my-2 ${theme}`}>
      <Link
        to={`/tasks/${item.id}`}
        className={`task-name px-1 font-size-2 ${theme}`}
      >
        {item.task.length > 0 ? item.task.substring(0, 5) + "..." : item.task}
      </Link>
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
