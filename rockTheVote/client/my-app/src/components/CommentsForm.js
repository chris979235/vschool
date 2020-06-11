import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'


export default function CommentsForm(props){
  const [input, setInput] = useState({comment:''})
  const {issueState}=useContext(IssueContext)
  const {addComment, logOut}=useContext(UserContext)

  console.log(issueState,8888899999)
  function handleChange(e){
    const {name, value} = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment({...input, issue: issueState.issue[0]})
    setInput({comment:''})
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="comments" 
        value={input.comments} 
        onChange={handleChange} 
        placeholder="comment"/>
      <button>Add comment</button>
      <button onClick={logOut}>log out</button>
    </form>
  )
}