 import React from 'react'
import Pet from "./Pet"
import FriendList from "./FriendsList"
export default function Friend(props) {
  const mappedpet=props.pets.map(function (newarr){
    return <Pet petname={newarr.name} petbreed={newarr.breed} />
  })
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      {mappedpet}
    </div>
  )
}
