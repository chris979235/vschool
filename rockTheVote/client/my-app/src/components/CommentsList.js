import React, {useEffect} from 'react'
import Comments from './Comments.js'


export default function TodoList(props){
  const {comments, getUserComments, issueid }=props
  
  useEffect(() => {
    getUserComments(issueid)
  },[issueid])

  return (
    <div className="todo-list">
      {comments.map(comment => <Comments {...comment} key={comment._id}
  />)}
    </div>
  )
}


// public page shoul show  all issues 
// No comments are loaded initially
// if user clicks a specific issue, route the user to a page such as path="/issue/:issueID"
    // once the new page loads, componentDidMount to fetch comments for that specific issue
