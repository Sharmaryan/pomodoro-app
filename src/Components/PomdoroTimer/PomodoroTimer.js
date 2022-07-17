import React,{useReducer} from 'react';
import './PomodoroTimer.css';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const pomodoroReducer = (state, action) => {
  switch (action.type) {
    case "FOCUS_HANDLER":
      return { ...state, focusTimer: false, breakTimer: true };
    case "BREAK_HANDLER":
      return { ...state, focusTimer: true, breakTimer: false };
    case "START_HANDLER":
      return { ...state, play: true };
    case "STOP_HANDLER":
      return { ...state, play: false };
    case "RESTART_HANDLER":
      return { ...state, play: true, key: state.key + 1 };

    default:
      return { ...state };
  }
};

export const PomodoroTimer = ({task}) => {
  

 const buttons = [
   {
     btnType: "START_HANDLER",
     btnName: "start",
     btnClass: "start btn",
   },
   {
     btnType: "STOP_HANDLER",
     btnName: "stop",
     btnClass: "stop btn",
   },
   {
     btnType: "RESTART_HANDLER",
     btnName: "restart",
     btnClass: "restart btn",
   },
 ];

 const [{ play, focusTimer, breakTimer, key }, dispatch] = useReducer(
   pomodoroReducer,
   {
     play: true,
     focusTimer: true,
     breakTimer: false,
     key: 1,
   }
 );

 const timer = ({ remainingTime }, mode) => {
   const minute = Math.floor((remainingTime % 3600) / 60);
   const second = Math.floor(remainingTime % 60);

   const minutes = `${minute < 10 ? "0" + minute : minute}`;
   const seconds = `${second < 10 ? "0" + second : second}`;
   if (mode === "focus") {
     return (
       <div>
         <span className='modes-name'> focus mode</span>
         <h1 className="modes">
           {minutes}:{seconds}
         </h1>
         <p className="remaining-time">
           out of {task[0]?.focusTimer} minutes
         </p>
       </div>
     );
   }
   if (mode === "break") {
     return (
       <div>
         <span className="modes-name">break mode</span>
         <h1 className="modes">
           {minutes}:{seconds}
           <p className="remaining-time">
             out of {task[0]?.breakTimer} minutes
           </p>
         </h1>
       </div>
     );
   }
 };

 return (
   <div className="pomodoro-timer mx-5">
     <div className="timer">
       {focusTimer && (
         <CountdownCircleTimer
           isPlaying={play}
           duration={task[0]?.focusTimer * 60}
           colors={["#0961ed", "#edcf09"]}
           colorsTime={[task[0]?.breakTimer * 60, 0]}
           onComplete={() => dispatch({ type: "FOCUS_HANDLER" })}
           key={key}
           size={400}
           strokeWidth={16}
           trailColor={"white"}
         >
           {({ remainingTime }) => timer({ remainingTime }, "focus")}
         </CountdownCircleTimer>
       )}
       {breakTimer && (
         <CountdownCircleTimer
           isPlaying={play}
           duration={task[0]?.breakTimer * 60}
           colors={["#edcf09", "#C850C0"]}
           colorsTime={[task[0]?.breakTimer * 60, 0]}
           onComplete={() => dispatch({ type: "BREAK_HANDLER" })}
           key={key + 1}
           size={400}
           strokeWidth={16}
           trailColor={"white"}
         >
           {({ remainingTime }) => timer({ remainingTime }, "break")}
         </CountdownCircleTimer>
       )}
     </div>
     <div className="buttons">
       {buttons.map(({ btnType, btnName, btnClass }) => {
         return (
           <button
             className={btnClass}
             onClick={() => dispatch({ type: btnType })}
           >
             {btnName}
           </button>
         );
       })}
     </div>
   </div>
 );
}
