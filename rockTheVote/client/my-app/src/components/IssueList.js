import React, {useEffect, useContext} from 'react'
import {IssueContext} from '../context/IssueProvider'
import Issue from './Issue.js'

export default function IssueList(){
  const {issueState,getIssues}=useContext(IssueContext)
  console.log(issueState,56565656)

 
  useEffect(() => {
    getIssues()
  },[])


   
  

  return (
    <div className="todo-list">
      {issueState.issues.map(issue => <Issue issue={issue} key={issue._id}/>)}
    </div>
  )
}

