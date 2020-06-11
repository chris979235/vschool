import React, {useContext} from 'react'
import { UserContext } from '../context/UserProvider'


export default function Comments(props){

  const {deleteComment}=useContext(UserContext)
  const {comments, _id}=props
 
  return (
    <div className="todo">
      <h1>{comments}</h1>
      <button onClick={()=>deleteComment(_id)}>delete</button>
    </div>
  )
} 