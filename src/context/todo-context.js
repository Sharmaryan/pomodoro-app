import { useContext, createContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
    case "ADD_TASK":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((item) => item.id !== action.payload),
        ],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        todoList: [
          ...state.todoList.map((item) =>
            item.id === action.payload.currentItemId
              ? {
                  ...item,
                  task: action.payload.task,
                  desc: action.payload.desc,
                  focusTimer: action.payload.focusTimer,
                  breakTimer: action.payload.breakTimer,
                }
              : item
          ),
        ],
      };
    default:
      return { ...state };
  }
};

const TodoProvider = ({ children }) => {
  const [{ todoList, currentElementId }, todoDispatch] = useReducer(
    todoReducer,
    {
      todoList: [],
      currentElementId: "",
    }
  );

  return (
    <TodoContext.Provider value={{ todoList, todoDispatch, currentElementId }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export { TodoProvider, useTodo };
