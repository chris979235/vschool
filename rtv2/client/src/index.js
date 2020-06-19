import React from "react"
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from "./context/UserProvider"
import IssueProvider from './context/IssueProvider'
import './style.css'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <IssueProvider>
        <App/>
      </IssueProvider>
    </UserProvider>
  </BrowserRouter>
,document.getElementById("root"))