import React from 'react'

export default function badge(props) {
  return (

    <div className="badge">
      <div classname="firstName"> Name: {props.firstName}  {props.lastName}</div>
       <div className="phone"> phone: {props.phone}</div>
      <div className="placeOfBirth"> placeOfBirth: {props.placeOfBirth}</div>
      <div className="favoriteFood"> favoriteFood: {props.favoriteFood}</div>
      <div className="email"> email:{props.email}</div>
  <div className="text" >{props.textBox}</div>
    </div>
  )
}
