import React, {useContext} from 'react'
import { Switch, Route, Redirect, Link} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/MappingIssues.js'
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider.js"

export default function App(){

const {token, logout}=useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logout={logout}/>}

        <nav>
          <Link to="/" className="profile1">Profile</Link>
          <Link to="/public" className="public1" >Public</Link>
      </nav>

      <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute 
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <Route 
          path="/public"
          component={Public}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  )
}