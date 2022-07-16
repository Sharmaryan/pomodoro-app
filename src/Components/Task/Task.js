import React from 'react'
import './Task.css';
export const Task = () => {
  return (
    <div className="task-single flex items-center my-2">
      <div className="task-name px-1 font-size-2">code</div>
      <div className="task-actions">
        <i class="fa fa-edit mx-1"></i>
        <i class="fa fa-trash mx-1"></i>
      </div>
    </div>
  );
}
