import React, {useContext, useEffect} from 'react'
import CommentsForm from './CommentsForm.js'
import CommentsList from './CommentsList.js'
import Comments from './Comments.js'
import {UserContext} from "../context/UserProvider.js"
import {IssueContext} from '../context/IssueProvider'
import Issues from './Issue'

export default function Profile(){
const {issueState, getIssues}=useContext(IssueContext)

const {user: {username}, comments, getUserComments, logOut}=useContext(UserContext)


console.log(issueState,222)

 

  

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A comment</h3>
      <CommentsForm comments={comments}/>
      <CommentsList comments={comments}  getUserComments={getUserComments} />
      <button onClick={logOut}></button>
    </div>
  )
}