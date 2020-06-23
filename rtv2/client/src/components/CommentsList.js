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
  console.log(props,2323232)
  

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
    console.log('imrunning')
    userAxios
        .delete(`/api/comments/${commentsid}`)
        .then((res) => {
            setComments(
            prev => {
            return  prev.filter((comments) => comments._id !== commentsid)
           }
            );
        })
        .catch((error) => console.log(error));
  }
  


  return (
    <div className="todo-list">
  

      {comments.map(comment => <Comment {...comment} key={comment._id} deleteComment={deleteComment}/>)}


      <div className='inputs'>
       <span> <h1>{props.title}: {props.description}</h1> </span>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="comment" 
            value={input} 
            onChange={handleChange} 
            placeholder={props.title}/>
          <button>Add comment</button>
        </form>
      </div>
    </div>
  )
}
