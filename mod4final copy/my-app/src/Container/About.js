import React from "react"
import {withRouter} from "react-router-dom"

 function Moves(props) {
 const name = props.location.state.name
 const img = props.location.state.sprites.front_default
 const weight= props.location.state.weight
 const experience = props.location.state.base_experience
 const height = props.location.state.height
 const types = props.location.state.types
 console.log(555,props)
 
 const mappedTypes=types.map(function(newType){
   return newType.type.name
 })

  return (
   <div>
     <div className="boxy">
      <img src={img} alt={name}/>
      <p>name: {name}</p>
      <p>weight: {weight}lbs</p>
      <p>experience: {experience}</p>
      <p>heigth:{height/2}feet</p>
      <p>types:{mappedTypes.join(", ")}</p>
     </div>
   </div>
  )
}

export default withRouter(Moves)