import "./App.css";
import { Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { Home, Todo, Pomodoro } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Todo />} />
        <Route path="/tasks/:taskId" element={<Pomodoro />} />
      </Routes>
    </div>
  );
}

export default App;
