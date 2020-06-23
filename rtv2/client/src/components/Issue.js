import React, {useState, useContext } from 'react'
import {IssueContext} from '../context/IssueProvider'
import axios from 'axios'

export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function Issue(props) {
const { voteUp,voteDown}=useContext(IssueContext)
  console.log(voteDown, voteUp,'vote')
 const {description, title, upvote, downvote} = props
console.log(props,12345678954)
  
 

  return (
    <div>
  <span className='title'>  <h1>{title}</h1>  like[{upvote}]dislikes[{downvote}]
  <button onClick={voteUp(props._id)}>like</button>
  <button onClick={voteDown(props._id)}>dislike</button>
  </span> 
  </div> 
  )
}