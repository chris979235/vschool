import React from 'react'

export default function Color(props) {
  return (
    <div>
      <div  style={{backgroundColor: `#${props.colored}`}}>{props.colored}</div>
    </div>
  )
}
