import React from 'react'
import {Switch, Route, Link} from "react-router-dom"
import Home from "./Container/Home"
import About from "./Container/About"
import PokemonList from './Container/PokemonList'
export default function App() {
  return (
    <div>
       <nav>
          <Link to="/" className="home">Home</Link>
          <Link to="/pokemon" className="pokemon" >pokemon</Link>
      </nav>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about/:id">
            <About />
        </Route>
        <Route path="/pokemon">
            <PokemonList />
        </Route>
      </Switch>
    </div>
  )
}
