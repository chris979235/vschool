import React, {useContext, useEffect} from 'react'
import CommentsForm from './CommentsForm.js'
import CommentsList from './CommentsList.js'
import Comments from './Comments.js'
import {UserContext} from "../context/UserProvider.js"
import {IssueContext} from '../context/IssueProvider'
import Issues from './Issues'


export default function Profile(){
const {issueState,getIssues}=useContext(IssueContext)
  const {user: {username}, comments, getUserComments, logOut}=useContext(UserContext)

  return (
    <div className="profile">
       <h1>HELLO lets talk about {issueState.issue[0].issues}</h1>
      <p>click for a predetermened topic</p>
      <button onClick={getIssues}>new subject</button>
      <h1>Welcome @{username}!</h1>
      <h3>Add A comment</h3>
      <CommentsForm comments={comments}/>
      <CommentsList comments={comments} issueid={issueState.issue[0]._id} getUserComments={getUserComments} />
      <button onClick={logOut}></button>
    </div>
  )
}