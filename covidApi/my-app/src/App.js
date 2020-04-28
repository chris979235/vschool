import React from 'react'
import {Switch, Route, Link} from "react-router-dom"
import Infected from "./container/Infected"
import Countries from "./container/Countries"
import SimpleInfected from "./container/Simpleinfected"
import MappedSlug from "./container/MappedSlug"
export default function App() {
  return (
    <div>
        <nav>
          <Link to="/" className="home">Infected </Link>
          <Link to="/countries" className="coronas" > Countries</Link>
      </nav>
      <Switch>
        <Route exact path="/">
            <Infected />
            <MappedSlug/>
        </Route>
        <Route path="/countries">
            <Countries />
            <SimpleInfected/>
        </Route>
      </Switch>
    </div>
  )
}
