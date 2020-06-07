import React, {useContext} from 'react'
import { UserContext } from '../context/UserProvider'


export default function Comments(props){

  const {addComment, deleteComment,}=useContext(UserContext)
  const {comments, _id}=props
  console.log(3333,comments)
  console.log(addComment,555)
  console.log(22,"props",props)
  console.log(props.comments,33333)
  return (
    <div className="todo">
      <h1>{comments}</h1>
      <button onClick={()=>deleteComment(_id)}>delete</button>
       <button >add like</button>
       {/* <button oncClick={disVote}>dis like</button> */}
    </div>
  )
} 