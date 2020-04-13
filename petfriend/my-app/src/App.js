import React from 'react'
import Friend from "./component/Friend"
import FriendsList from "./component/FriendsList"
export default function App() {
  const friends=FriendsList.map(function (newarr){
    return <Friend age={newarr.age} name={newarr.name} pets={newarr.pets} />
  })
  return ( <div>{friends} </div>
  )
}
