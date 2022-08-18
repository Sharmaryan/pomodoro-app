import { useContext, createContext, useReducer } from "react";

const ModalContext = createContext();

const modalReducer = (state, action) => {
  switch (action.type) {
    case "TASK_HANDLER":
      return { ...state, task: action.payload };
    case "DESC_HANDLER":
      return { ...state, desc: action.payload };
    case "FOCUS_HANDLER":
      return { ...state, focusTimer: action.payload };
    case "BREAK_HANDLER":
      return { ...state, breakTimer: action.payload };
    case "HANDLE-MODAL":
      return { ...state, modal: true, isEditActive: false };
    case "HANDLE-EDIT":
      return {
        ...state,
        modal: action.payload,
        isEditActive: action.payload,
        task: action.item.task,
        desc: action.item.desc,
        focusTimer: action.item.focusTimer,
        breakTimer: action.item.breakTimer,
        currentItemId: action.item.id,
      };
    case "RESET":
      return {
        ...state,
        task: "",
        desc: "",
        focusTimer: "",
        breakTimer: "",
        modal: false,
        isEditActive: false,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        modal: false,
        task: "",
        desc: "",
        focusTimer: "",
        breakTimer: "",
        currentItemId: "",
      };
    default:
      return { ...state };
  }
};

const ModalProvider = ({ children }) => {
  const [
    { task, desc, focusTimer, breakTimer, modal, isEditActive, currentItemId },
    dispatch,
  ] = useReducer(modalReducer, {
    task: "",
    desc: "",
    focusTimer: "",
    breakTimer: "",
    modal: false,
    isEditActive: false,
    currentItemId: "",
  });

  return (
    <ModalContext.Provider
      value={{
        modal,
        task,
        desc,
        focusTimer,
        breakTimer,
        isEditActive,
        currentItemId,
        dispatch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
