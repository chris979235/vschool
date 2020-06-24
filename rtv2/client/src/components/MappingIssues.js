import React, {useEffect, useState, useContext} from 'react'
import Profile from './Profile'
import axios from 'axios'
import Comment from './Comment'
import CommentsList from './CommentsList'
import Issue from "./Issue"
import {IssueContext} from '../context/IssueProvider'



export default function MappingIssues() {
  const {getIssues, issues}=useContext(IssueContext)


useEffect(()=>{
  getIssues()
},[])


  return (
    <div className='map'>
       {issues.sort((a,b) => b.upvote-a.upvote ).map(issue => <Issue {...issue} key={issue._id} />)}
       {issues.map(issue => <CommentsList {...issue} key={issue._id} />)}
    </div>
  )
}
