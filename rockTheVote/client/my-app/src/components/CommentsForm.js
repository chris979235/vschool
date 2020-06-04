import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const initInputs = {
 comments:''
}

export default function CommentsForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {addComment}=useContext(UserContext)
  console.log('addcomment',addComment)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment(inputs)
    setInputs(initInputs)
  }

  const {comments} = inputs
  console.log(22222222,comments)


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="comments" 
        value={comments} 
        onChange={handleChange} 
        placeholder="comment"/>
      <button>Add comment</button>
    </form>
  )
}