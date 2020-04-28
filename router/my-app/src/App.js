import React from "react"
import {Switch, Route, Link} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App(){
  return(
    <div>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/Services">Services</Link>
      </nav>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/Services">
            <Services/>
        </Route>
      </Switch>
    </div>
  )
}

export default App

// const ispalin = str =>{
// const reversedStr=str.split("").reverse().join('')
// if (str.toLowerCase()===reversedStr.toLowerCase()){
//   return true
// }else {return false}
// }