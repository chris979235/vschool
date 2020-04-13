import React from 'react'
import Info from "./Info"
import Friends from "./Friends"
export default function App() {
  const mappedFriend=Info.map(function (friend){
    return(
      <Friends
      age={friend.age}
      name={friend.name}
      pets={friend.pets}
      />
    )
  })
  return (
    <div>
     {mappedFriend}
    </div>
  )
}
