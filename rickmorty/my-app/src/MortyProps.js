import React from 'react'

export default function MortyProps(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.status}</h3>
      <h3>{props.species}</h3>
    </div>
  )
}
