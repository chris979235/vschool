import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"
import {BrowserRouter as Router} from "react-router-dom"
import {ThemeContextProvider} from "./ThemeContext"
ReactDOM.render(
<Router>
<ThemeContextProvider>
  <App/>
</ThemeContextProvider>, 
</Router>,
document.getElementById("root"))
