import React, {useEffect, useState, useContext} from 'react'
import Profile from './Profile'
import axios from 'axios'
import Comment from './Comment'
import CommentsList from './CommentsList'
import Issue from "./Issue"
import {IssueContext} from '../context/IssueProvider'
import YourPosts from './YourPosts'
import styled from 'styled-components'

const Div=styled.div`
display:flex;
justify-content: space-evenly;
flex-wrap:wrap;
flex:200px;
`

export default function MappingIssues() {
  const {getIssues, issues}=useContext(IssueContext)


useEffect(()=>{
  getIssues()
},[])


  return (
    <>
     <Div>  {issues.sort((a,b) => b.upvote-a.upvote ).map(issue => <Issue {...issue} key={issue._id} />)}</Div>
     <Div>  {issues.map(issue => <CommentsList {...issue} key={issue._id} />)}</Div>
    </>
  )
}
