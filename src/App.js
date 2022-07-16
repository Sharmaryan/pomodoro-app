import "./App.css";
import { Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { Home, Todo } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
