import "./App.css";
import { Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
