import React from "react";
import "./Modal.css";
export const Modal = () => {
  return (
    <div className="modal justify-center items-center">
      <div className="modal-inputs">
        <label htmlFor="task">
          <span className="mx-2 font-size-2">Enter Task</span>
          <input
            id="task"
            type="text"
            placeholder="Enter Task Name"
            className="modal-text my-1 modal-input"
          />
        </label>
        <label htmlFor="desc">
          <span className="mx-2 font-size-2">Enter Description</span>

          <textarea
            id="desc"
            placeholder="Enter Description"
            className="modal-desc my-1 modal-input"
          ></textarea>
        </label>
        <label htmlFor="focus">
          <span className="mx-2 font-size-2">Enter Focus Time</span>
          <input
            id="focus"
            type="number"
            min="5"
            max="60"
            className="modal-input"
            placeholder="Enter Focus Time"
          />
        </label>
        <label htmlFor="break">
          <span className="mx-2 font-size-2">Enter Break Time</span>
          <input
            id="break"
            type="number"
            min="2"
            max="15"
            className="modal-input"
            placeholder="Enter Break Time"
          />
        </label>
        <div className="modal-buttons mx-2">
          <button className="btn secondary-btn">cancel</button>
          <button className="btn primary-btn">add</button>
        </div>
      </div>
    </div>
  );
};
