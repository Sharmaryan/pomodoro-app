import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { TodoProvider } from "./context/todo-context";
import { ModalProvider } from "./context/modal-context";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <TodoProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TodoProvider>
    </Router>
  </StrictMode>
);

reportWebVitals();
