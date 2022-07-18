import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, TodoProvider, ModalProvider } from "./context";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <TodoProvider>
        <ModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ModalProvider>
      </TodoProvider>
    </Router>

);

reportWebVitals();
