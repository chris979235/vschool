import React from 'react'



export default function YourPosts(props) {
console.log(123,props)


  return (
    <div className="display">
      <br></br>
      <h1>{props.userComment.text}</h1>
    </div>
  )
}
