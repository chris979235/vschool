import React, {useContext} from 'react'
import { Switch, Route, Redirect, Link} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/MappingIssues.js'
import ProtectedRoute from "./components/ProtectedRoute"
import MappingYourComments from './components/MappingYourComments'
import {UserContext} from "./context/UserProvider.js"

export default function App(){
const {token, logOut}=useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logOut={logOut}/>}

        <nav>
          <Link to="/" className="profile1">Create an issue</Link>
          <Link to="/public" className="public1" >comment on issues</Link>
          <Link to="/MappingYourComments" className='yourpost'>your posts</Link>
         <button onClick={ () => logOut()} className='button1'>logout</button>
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
        <Route
        path="/MappingYourComments"
        component={MappingYourComments}
        redirectTo="/"
        token={token}
        />

      </Switch>
    </div>
  )
}