import React from 'react'

export default function MappedBounty(props) {
  
  return (
    <div>
      <h2>Wanted: {props.firstName}-{props.lastName}</h2>
      <h3>Status: {props.living}</h3>
      <h4>Bounty: {props.bounty}</h4>
      <h4>Alighnment: {props.type}</h4>
    </div>
  )
}
