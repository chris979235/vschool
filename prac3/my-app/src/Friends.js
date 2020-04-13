import React from 'react'
import Pets from "./Pets"
export default function Freinds(props) {
  const mappedPets=props.pets.map(function(pet){
    return (
      <Pets
      name={pet.name}
      breed={pet.breed}
      />
    )
  })
  return (
    <div>
      {props.name}
      {props.age}
      {mappedPets}
    </div>
  )
}
