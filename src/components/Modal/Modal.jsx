import React, { useState } from "react";
import "./Modal.css";
import { useTodo } from "../../context/todo-context";
export const Modal = () => {
  const { editClicked, dispatch, itemBeingEdited } = useTodo();

  const [title, setTitle] = useState(editClicked ? itemBeingEdited.title : "");
  const [desc, setDesc] = useState(editClicked ? itemBeingEdited.desc : "");

  return (
    <div className="modal">
      <form>
        <input
          type="text"
          placeholder="Add Title"
          className="modal-input modal-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Add Description"
          className="modal-input modal-desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
      </form>
      <div className="modal-buttons">
        {editClicked ? (
          <button
            className="modal-btn modal-add"
            onClick={() =>
              dispatch({
                type: "UPDATE_HANDLER",
                payload: { id: itemBeingEdited.id, title, desc },
              })
            }
          >
            update
          </button>
        ) : (
          <button
            className="modal-btn modal-add"
            onClick={() =>
              dispatch({ type: "ADD_HANDLER", payload: { title, desc } })
            }
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
