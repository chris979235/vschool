import React from 'react'

export default function Pet(props) {
  return (
    <div>
      {props.breed}
      {props.name}
    </div>
  )
}
