import React from 'react'
import Pet from "./Pet"
export default function Friend(props) {
  const mappedPets=props.pets.map(function (pet){
    return <Pet  breed={pet.breed} name={pet.name}/>
  })
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      {mappedPets}
    </div>
  )
}
