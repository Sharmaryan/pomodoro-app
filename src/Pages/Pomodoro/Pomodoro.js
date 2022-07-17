import React from "react";
import { useTodo } from "../../context/todo-context";
import { useParams } from "react-router-dom";
import { PomodoroTimer, PomodoroDescription } from "../../Components";
import './Pomodoro.css';
export const Pomodoro = () => {
  const { todoList } = useTodo();
  const { taskId } = useParams();

  const currentTask = todoList.filter((todo) => todo.id === taskId);
  return (
    <div className="flex items-center pomodoro">
      <PomodoroTimer task={currentTask} />
      <PomodoroDescription task={currentTask} />
    </div>
  );
};
