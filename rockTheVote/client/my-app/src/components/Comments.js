import React from 'react'

export default function Comments(props){
  console.log(22,"props",props)
  console.log(props.comments,33333)
  const {comments}=props
  return (
    <div className="todo">
      <h1>{comments}</h1>
      <button>delete</button>
    </div>
  )
} 