import React from "react";
import "./Modal.css";
import { useTodo } from "../../context/todo-context";
export const Modal = () => {
  const { editClicked, dispatch } = useTodo();

  return (
    <div className="modal">
      <form>
        <input
          type="text"
          placeholder="Add Title"
          className="modal-input modal-title"
          onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
        />
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Add Description"
          className="modal-input modal-desc"
          onChange={(e) => dispatch({ type: "DESC", payload: e.target.value })}
        ></textarea>
      </form>
      <div className="modal-buttons">
        {editClicked ? (
          <button
            className="modal-btn modal-add"
            onClick={() => dispatch({ type: "UPDATE_HANDLER" })}
          >
            update
          </button>
        ) : (
          <button
            className="modal-btn modal-add"
            onClick={() => dispatch({ type: "ADD_HANDLER" })}
          >
            add
          </button>
        )}

        <button
          className="modal-btn modal-cancel"
          onClick={() => dispatch({ type: "CANCEL_HANDLER" })}
        >
          cancel
        </button>
      </div>
    </div>
  );
};
