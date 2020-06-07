import React, {useEffect} from 'react'
import Comments from './Comments.js'

export default function TodoList(props){
  console.log(2323,props)
  const {comments, getUserComments, }=props

  useEffect(() => {
    getUserComments()
  },[])

  console.log('comments',comments)
  return (
    <div className="todo-list">
      {comments.map(comments => <Comments {...comments} key={comments._id}
  />)}
    </div>
  )
}