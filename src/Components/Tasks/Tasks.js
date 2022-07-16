import React from 'react';
import { Task } from '../Task/Task';
import './Tasks.css';
export const Tasks = () => {
  return (
    <div className="tasks">
      <div className="flex my-2">
        <h3 className="tasks-heading mx-2 font-size-2">Tasks</h3>
        <i class="fa fa-plus tasks-add mx-2 "></i>
      </div>
      <div className="tasks-list mx-2">
        <Task/>
        <Task/>
      </div>
    </div>
  );
}
