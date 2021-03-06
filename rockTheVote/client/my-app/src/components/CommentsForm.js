import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'


export default function CommentsForm(props){
  const [input, setInput] = useState('')
  const {issueState}=useContext(IssueContext)
  const {addComment, logOut}=useContext(UserContext)

  
console.log(props,333)
  console.log(issueState,333444)
  
  function handleChange(e){
    const {name, value} = e.target
    setInput(value)
    }

  function handleSubmit(e){
    e.preventDefault()
    addComment({comments: input, issue: issueState.issues._id})
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="comment" 
          value={input} 
          onChange={handleChange} 
          placeholder="comment"/>
        <button>Add comment</button>
      </form>
        <button onClick={logOut}>log out</button>
    </div>
  )
}