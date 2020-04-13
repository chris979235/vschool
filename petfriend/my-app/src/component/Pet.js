import React from 'react'

export default function Pet(props) {
  return (
    <div>
      <p>{props.petname}</p>
      <p>{props.petbreed}</p>
    </div>
  )
}
