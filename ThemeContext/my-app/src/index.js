import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { MyContext } from "./MyContext.js";

ReactDOM.render(
  <MyContext>
    <App />
  </MyContext>,
  document.getElementById("root")
);
