import ReducedPokemon from "./ReducedPokemon"
import React, {useState} from "react"
import {withRouter} from "react-router-dom"

 function Moves(props) {

 const name = props.location.state.name
 const img = props.location.state.sprites.front_default
 const weight= props.location.state.weight
 const experience= props.location.state.base_experience
 const height=props.location.state.height
  
 
  return (
   <div>
  <img src={img} alt={name}/>
  <p>name: {name}</p>
  <p>weight: {weight}lbs</p>
  <p>experience: {experience}</p>
  <p>heigth:{height/2}feet</p>
   </div>
  )
}

export default withRouter(Moves)