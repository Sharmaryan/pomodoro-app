import React from "react";
import { useTodo } from "../../context/todo-context";
import { useModal } from "../../context/modal-context";
import { v4 as uuid } from "uuid";
import "./Modal.css";

export const Modal = () => {
  const cancelClickHandler = () => {
    dispatch({ type: "RESET", payload : true });
  };

  const addClickHandler = () => {
    todoDispatch({
      type: "ADD_TASK",
      payload: { task, desc, focusTimer, breakTimer, id: uuid() },
    });
    dispatch({ type: "RESET" });
  };

  const updateHandler = () => {
    todoDispatch({type:"UPDATE_TASK", payload: {currentItemId, task, desc, focusTimer, breakTimer}});
    dispatch({type: 'CLOSE_MODAL'});
  }




  const { todoDispatch } = useTodo();
  const {
    dispatch,
    task,
    desc,
    focusTimer,
    breakTimer,
    isEditActive,
    currentItemId,
  } = useModal();


 const isDisabled = (task.length > 0) && (desc.length > 0) && (focusTimer.length > 0) && (breakTimer.length)

  return (
    <div className="modal justify-center items-center">
      <div className="modal-inputs">
        <label htmlFor="task">
          <span className="mx-2 font-size-2">Enter Task</span>
          <input
            value={task}
            id="task"
            type="text"
            placeholder="Enter Task Name"
            className="modal-text my-1 modal-input"
            onChange={(e) =>
              dispatch({ type: "TASK_HANDLER", payload: e.target.value })
            }
          />
        </label>
        <label htmlFor="desc">
          <span className="mx-2 font-size-2">Enter Description</span>

          <textarea
            value={desc}
            id="desc"
            placeholder="Enter Description"
            className="modal-desc my-1 modal-input"
            onChange={(e) =>
              dispatch({ type: "DESC_HANDLER", payload: e.target.value })
            }
          ></textarea>
        </label>
        <label htmlFor="focus">
          <span className="mx-2 font-size-2">Enter Focus Time</span>
          <input
            value={focusTimer}
            id="focus"
            type="number"
            min="5"
            max="60"
            className="modal-input"
            placeholder="Enter Focus Time"
            onChange={(e) =>
              dispatch({ type: "FOCUS_HANDLER", payload: e.target.value })
            }
          />
        </label>
        <label htmlFor="break">
          <span className="mx-2 font-size-2">Enter Break Time</span>
          <input
            value={breakTimer}
            id="break"
            type="number"
            min="2"
            max="15"
            className="modal-input"
            placeholder="Enter Break Time"
            onChange={(e) =>
              dispatch({ type: "BREAK_HANDLER", payload: e.target.value })
            }
          />
        </label>
        <div className="modal-buttons mx-2">
          <button className="btn secondary-btn" onClick={cancelClickHandler}>
            cancel
          </button>
          {isEditActive ? (
            <button
              className={`btn ${isDisabled ? "primary-btn" : "disabled-btn"}  `}
              onClick={updateHandler}
              disabled={!isDisabled}
            >
              update
            </button>
          ) : (
            <button
              className={`btn ${isDisabled ? "primary-btn" : "disabled-btn"}  `}
              onClick={addClickHandler}
              disabled={!isDisabled}
            >
              add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

