import React, {useContext} from 'react'
import CommentsForm from './CommentsForm.js'
import CommentsList from './CommentsList.js'
import Comments from './Comments.js'
import {UserContext} from "../context/UserProvider.js"

export default function Profile(){
  const {user: {username}, comments, getUserComments, logOut, votes, addVotes }=useContext(UserContext)
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A comment</h3>
      <CommentsForm comments={comments}/>
      <CommentsList comments={comments} getUserComments={getUserComments} votes={votes} addVotes={addVotes}/>
      <button onClick={logOut}></button>
    </div>
  )
}