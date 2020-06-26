import React, { useContext, } from 'react'
import {IssueContext} from '../context/IssueProvider'
import styled from 'styled-components'

const Button = styled.button`
color:red;
background-color:blue;
width:50px;
margin:5px;
`
const Spancontainer = styled.span`
display:flex;
text-align: center;
flex-direction: column;
align-items:center;
min-width:200px;
flex-wrap:wrap;
flex:200px;
`
const Div=styled.div`
margin:5vh;
flex-wrap:wrap;
flex:200px;
`


export default function Issue(props) {
const { voteUp,voteDown,...issueState}=useContext(IssueContext)
  
 const {description, title, upvote, downvote} = props
 

 

  return (
  <>
  <Div>
    <Spancontainer className='title'> 
     like[{upvote}]dislikes[{downvote}]
     <h1>{title}</h1>   
     <h2>{description}</h2>
      <Button onClick={()=>voteUp(props._id)}>like</Button>
      <Button onClick={()=>voteDown(props._id)}>dislike</Button>
    </Spancontainer> 
  </Div>
  </> 
  )
}