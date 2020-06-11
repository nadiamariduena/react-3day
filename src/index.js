import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*

First argument
// 
 <React.StrictMode>
    <App />
  </React.StrictMode>,
// 
Second argument
document.getElementById("root")
*/
