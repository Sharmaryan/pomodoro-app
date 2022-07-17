import React from 'react'
import './PomodoroDescription.css';
export const PomodoroDescription = ({task}) => {
  return (
    <div className='pomodoro-desc flex'>
      <div className="pomodoro-title mx-5 font-size-2 my-1">{task[0]?.task}</div>
      <div className="pomodoro-detail font-size-2">{task[0]?.desc}</div>
    </div>
  )
}
