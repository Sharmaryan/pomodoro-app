import { v4 as uuid } from "uuid";
export const todoReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "TITLE":
      return { ...state, title: payload };
    case "DESC":
      return { ...state, desc: payload };
    case "MODAL":
      return { ...state, showModal: true, editClicked: false };
    case "ADD_HANDLER":
      return {
        ...state,
        showModal: false,

        taskAdded: [
          ...state.taskAdded,
          {
            title: state.title,
            desc: state.desc,
            id: uuid(),
          },
        ],
      };
    case "DELETE_HANDLER":
      return {
        ...state,
        taskAdded: [...payload.filter((todo) => todo.id !== action.id)],
      };
    case "CANCEL_HANDLER":
      return {
        ...state,
        showModal: false,
      };
    case "UPDATE_HANDLER":
      return {
        ...state,
        taskAdded: [
          ...state.taskAdded.map((task) => {
            if (task.id !== state.itemBeingEdited) {
              return { ...task };
            } else {
              return { ...task, title: state.title, desc: state.desc };
            }
          }),
        ],
        showModal: false,
      };
    case "EDIT_HANDLER":
      return {
        ...state,
        showModal: true,
        editClicked: true,
        itemBeingEdited: payload.id,
      };
    default:
      return { ...state };
  }
};
