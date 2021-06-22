import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/customStyles.scss";
import { GlobalProvider } from "./contextAPI/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
