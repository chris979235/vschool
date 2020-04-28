import React from 'react'

export default function Country(props) {
  return (
    <div>
      <h1>{props.country}</h1>
      <p>{props.key}</p>
    </div>
  )
}

