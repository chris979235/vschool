import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'


export default function CommentsForm(props){
  const [input, setInput] = useState('')
  const {issueState}=useContext(IssueContext)
  const {addComment, logOut}=useContext(UserContext)

  console.log(props._id,12345678)
  
  console.log(issueState.issue,2323232232323)

  
  
  function handleChange(e){
    const {name, value} = e.target
    setInput(value)
    }

  function handleSubmit(e){
    e.preventDefault()
    addComment({comments: input, issue: props._id})
    setInput('')
  }

  // issue: issueState.issue[0]._id
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="comment" 
        value={input} 
        onChange={handleChange} 
        placeholder="comment"/>
      <button>Add comment</button>
      <button onClick={logOut}>log out</button>
    </form>
  )
}