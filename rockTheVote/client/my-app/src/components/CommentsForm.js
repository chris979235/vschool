import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'



export default function CommentsForm(props){
  const [input, setInput] = useState({comments:''})

  const {addComment, logOut}=useContext(UserContext)

  console.log('addcomment',addComment)

  function handleChange(e){
    const {name, value} = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment(input)
    setInput({comments:''})
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