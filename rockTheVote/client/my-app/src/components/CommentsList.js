import React, {useEffect, useContext} from 'react'
import Comments from './Comments.js'
import CommentsForm from './CommentsForm'
// import { IssueContext } from '../context/IssueProvider'

export default function TodoList(props){
  const {comments, getUserComments, issueid }=props
  // const {issueState}=useContext(IssueContext)
  // console.log(issueState.issue[0],4444444,888888)
  // console.log(issueid,55555,888888)
  useEffect(() => {
    getUserComments(issueid)
  },[issueid])

  return (
    <div className="todo-list">
      {comments.map(comment => <Comments {...comment} key={comment._id}
  />)}

  {/* {issueState.issue[0].map(issues => <CommentsForm {...issues}/>)} */}
    </div>
  )
}


