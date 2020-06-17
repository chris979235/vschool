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

const randomNumber=Math.ceil(Math.random()*4)-1



console.log(issueState,33333333)
  const randomIssue=issueState.issues[randomNumber]

  console.log('randomnumber',randomNumber)
  console.log('randomIssue',randomIssue)

  useEffect(()=>{
    getUserComments(issueState.issues[randomNumber]._id)
  },[])

  return (
    <div className="profile">
       <Issues issue={randomIssue} clickFunction={getIssues} btntxt={'click for a random issue'} key={randomIssue._id}/>
      <h1>Welcome @{username}!</h1>
      <h3>Add A comment</h3>
      <CommentsForm comments={comments}/>
      <CommentsList comments={comments} issueid={randomIssue._id} getUserComments={getUserComments} />
      <button onClick={logOut}></button>
    </div>
  )
}