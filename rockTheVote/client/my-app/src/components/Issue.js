import React, {useState, useEffect} from 'react'
import axios from 'axios'

const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function Issue(props){
  const {issue, btntxt}=props
  const [commentState, setCommentState]=useState([])

  console.log(issue,45243534)

  console.log('commentstate',commentState)


  function commentToggle(){
    if (commentState.length > 0){
      setCommentState([])
    }else{
        userAxios.get(`/api/comments/issues/${issue._id}`)
        .then(res => {
          console.log(res.data,87654321)
          // setCommentState(prevState =>({
          //   ...prevState,
          //   comments:res.data
          // }))
        })
        .catch(err=> console.log(err.errMsg))
      }
    }
    
  useEffect(()=>{
    commentToggle()
    console.log('commenttoggle',commentToggle())
  },[])

  return (
    <div>
      <h1>Hello lets talk about {issue.title}</h1>
      <button onClick={commentToggle}> click for more comments </button>
    </div>
  )
  } 
