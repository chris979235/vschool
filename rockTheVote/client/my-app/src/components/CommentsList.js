import React from 'react'
import Comments from './Comments.js'

export default function TodoList(props){
  console.log(2323,props)
  const {comments}=props
  return (
    <div className="todo-list">
      {comments.map(comments => <Comments {...comments} key={comments._id}/>)}
    </div>
  )
}