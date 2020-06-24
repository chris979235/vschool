import React, { useContext, } from 'react'
import {IssueContext} from '../context/IssueProvider'




export default function Issue(props) {
const { voteUp,voteDown,...issueState}=useContext(IssueContext)
  
 const {description, title, upvote, downvote} = props
 
console.log(props,12345678954)

 

  return (
  <span className='issue'>
    <span className='title'>  <h1>{title}</h1>  like[{upvote}]dislikes[{downvote}]
      <button onClick={()=>voteUp(props._id)}>like</button>
      <button onClick={()=>voteDown(props._id)}>dislike</button>
    </span> 
  </span> 
  )
}