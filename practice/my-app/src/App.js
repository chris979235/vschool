import React from 'react'
import Info from "./Info"
import Friend from "./Friend"
export default function App() {
  const mappedFriends=Info.map(function(newFriend){
    return <Friend age={newFriend.age} name={newFriend.name} pets={newFriend.pets}/>
  })
  return (
    <div>
      {mappedFriends}
    </div>
  )
}
