import React, {useContext, useEffect} from 'react'
import { IssueContext } from '../context/IssueProvider'
import {UserContext} from "../context/UserProvider.js"

export default function Comments(){
  const {issueState,getIssues,getIssueId}=useContext(IssueContext)
  const {getPostComment}=useContext(UserContext)

  console.log(issueState,23432423)
  
  useEffect(()=>{
    if(issueState.issue.length === 0){
      getIssues()
      getPostComment()
    } 
  },[])

  useEffect(()=>{
    getIssueId()
  })




  return (
    <div>
      <h1>HELLO lets talk about {issueState.issue[0].issues}</h1>
      <p>click for a predetermened topic</p>
      <button onClick={getIssues}>new subject</button>
    </div>
  )
} 