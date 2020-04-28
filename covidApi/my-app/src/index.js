import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {BrowserRouter as Router} from "react-router-dom"
import {SimpleCovidProvider} from "./container/SimpleCovid"
ReactDOM.render(
  <Router>
    <SimpleCovidProvider>
    <App/>
  </SimpleCovidProvider>
  </Router>
  ,
  document.getElementById("root")
)