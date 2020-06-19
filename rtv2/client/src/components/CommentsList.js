import React, {useEffect,useState, useContext} from 'react'
import { UserContext } from '../context/UserProvider'
import Comment from './Comment'
import axios from 'axios'

export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function CommentsList(props){
  const [input, setInput] = useState('')
  const [comments, setComments]=useState([])
  console.log(2222233,comments.text)
  

  console.log(comments,888)
  function getUserComments(titleid){
    userAxios.get(`/api/comments/${titleid}`)
    .then(res => {
      console.log(res.data,5544)
      setComments( res.data
      )
    })
    .catch(err=> console.log(err.response.data.errMsg))
  }

  function addComment(newComment){
    userAxios.post('/api/comments', newComment)
    .then(res => {
      console.log(res,55555)
      setComments(prev=> [...prev ,res.data])
    })
    .catch(err=> console.log(err))
    }


  useEffect(() => {
    getUserComments(props._id)
  },[props._id])

  function handleChange(e){
    const {name, value} = e.target
    setInput(value)
    }

  function handleSubmit(e){
    e.preventDefault()
    addComment({text: input, issue: props._id})
    setInput('')
  }

  function deleteComment(commentsid) {
    userAxios
        .delete(`/api/comments/${commentsid}`)
        .then((res) => {
            setComments((prev) =>
              ({
                ...prev,
                comments: prev.comments.filter((comments) => comments._id !== commentsid)
                })
            );
        })
        .catch((error) => console.log(error));
  }
  


  return (
    <div className="todo-list">
  

      {comments.map(comment => <Comment {...comment} key={comment._id} deleteComment={deleteComment}/>)}


      <div className='inputs'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="comment" 
            value={input} 
            onChange={handleChange} 
            placeholder="comment"/>
          <button>Add comment</button>
        </form>
      </div>
    </div>
  )
}