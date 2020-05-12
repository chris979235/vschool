import React from 'react'
import CallMorty from './CallMorty'
import MortsWorld from './MortsWorld'
import {Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
       <nav>
          <Link to="/">Home</Link>
          <Link to="/CallMorty">world of mort</Link>
      </nav>
      <Switch>
        <Route path="/CallMorty">
            <CallMorty />
        </Route>
        <Route path="/MortsWorld/:id">
            <MortsWorld />
        </Route>
      </Switch>
    </div>
  )
}
