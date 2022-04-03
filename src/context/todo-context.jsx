import { useContext, createContext, useReducer } from "react";

import { todoReducer } from "../reducer/todo-reducer";

const TodoContext = createContext();

const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [{ showModal, taskAdded, editClicked }, dispatch] = useReducer(
    todoReducer,
    {
      showModal: false,
      title: "",
      desc: "",
      taskAdded: [],
      editClicked: false,
      itemBeingEdited: "",
    }
  );

  return (
    <TodoContext.Provider
      value={{
        showModal,
        taskAdded,
        dispatch,
        editClicked,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodo, TodoProvider };
