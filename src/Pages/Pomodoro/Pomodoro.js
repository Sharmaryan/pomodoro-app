import React from "react";
import { useTodo, useTheme } from "../../context";
import { useParams } from "react-router-dom";
import { PomodoroTimer, PomodoroDescription } from "../../Components";
import "./Pomodoro.css";
export const Pomodoro = () => {
  const { todoList } = useTodo();
  const { taskId } = useParams();
  const {theme} = useTheme();

  const currentTask = todoList.filter((todo) => todo.id === taskId);

  return (
    <div className={`flex items-center pomodoro ${theme}`}>
      {todoList.length > 0 && <PomodoroTimer task={currentTask} />}
      {todoList.length > 0 && <PomodoroDescription task={currentTask} />}
    </div>
  );
};
