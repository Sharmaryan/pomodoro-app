import React from "react";
import "./Task.css";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { useTodo } from "../../context/todo-context";
export const Task = () => {
  const { taskAdded, dispatch } = useTodo();
  return (
    <div>
      {taskAdded &&
        taskAdded.map((task) => {
          const { id, title } = task;
          return (
            <div className="task" key={id}>
              <div className="task-title">{title}</div>
              <div className="task-buttons">
                <MdOutlineDeleteOutline
                  className="task-delete"
                  onClick={() =>
                    dispatch({ type: "DELETE_HANDLER", payload: taskAdded, id })
                  }
                />

                <MdEdit
                  className="task-edit"
                  onClick={() =>
                    dispatch({ type: "EDIT_HANDLER", payload: task })
                  }
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};
