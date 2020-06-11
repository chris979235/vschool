import React, {useContext} from 'react'
import CommentsForm from './CommentsForm.js'
import CommentsList from './CommentsList.js'
import Comments from './Comments.js'
import {UserContext} from "../context/UserProvider.js"
import Issues from './Issues'
export default function Profile(){
  const {user: {username}, comments, getUserComments, logOut}=useContext(UserContext)
  return (
    <div className="profile">
      <Issues/>
      <h1>Welcome @{username}!</h1>
      <h3>Add A comment</h3>
      <CommentsForm comments={comments}/>
      <CommentsList comments={comments} getUserComments={getUserComments} />
      <button onClick={logOut}></button>
    </div>
  )
}