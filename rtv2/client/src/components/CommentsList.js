import React, {useEffect, useState} from 'react'
import Comment from './Comment'
import axios from 'axios'
import Profile from './Profile'
import styled from 'styled-components'
import YourPosts from './YourPosts'

export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function CommentsList(props){
  const [input, setInput] = useState('')
  const [comments, setComments]=useState([])

  console.log(22222,props)
  console.log(comments,888)
  function getUserComments(titleid){
    userAxios.get(`/api/comments/issue/${titleid}`)
    .then(res => {
      setComments( res.data
      )
    })
    .catch(err=> console.log(err.response.data.errMsg))
  }

  function addComment(newComment){
    userAxios.post('/api/comments', newComment)
    .then(res => {
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
            return  prev.filter((comments) => comments._id !== commentsid ) 
           }
            );
        })
        .catch((error) => console.log(error));
  }

  


  return (
    <Div>
     <Spancontainer>
      <span className='inputs'>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="comment" 
            value={input} 
            onChange={handleChange} 
            placeholder={props.title}/>
            <span> <h1>{props.title}: {props.description}</h1> </span>
          <Button>Add comment</Button>
        </form>
      </span>
    {comments.map(comment => <Comment {...comment} key={comment._id} deleteComment={deleteComment}/>)}
      </Spancontainer>
   </Div>
  )
}

const Button = styled.button`
color:blue;
background-color:red;
margin:5px;
`
const Spancontainer = styled.span`
display:flex;
text-align: center;
flex-direction: column;
align-items:center;
flex-wrap:wrap;
flex:200px;
`
const Div=styled.div`
margin:5vh;
flex-wrap:wrap;
flex:200px;
`