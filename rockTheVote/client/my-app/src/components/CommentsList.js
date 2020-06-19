import React, {useEffect, useContext} from 'react'
import Comments from './Comments.js'
import {UserContext} from '../context/UserProvider'
import {IssueContext} from '../context/IssueProvider'

export default function CommentsList(){
  
  const {getUserComments}=useContext(UserContext)
  const {issueState}=useContext(IssueContext)

  console.log(12321,issueState)

  useEffect(() => {
    getUserComments(titleid)
  },[titleid])


  return (
    <div className="todo-list">
      {/* {comments.map(comment => <Comments {...comment} key={comment._id} */}
  {/* />)} */}
    </div>
  )
}


