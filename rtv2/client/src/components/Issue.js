import React, {useState, useCallback, } from 'react'
import axios from 'axios'
export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function Issue(props) {


  const [votedUp, setVotedUp]=useState(0)
  const [votedDown, setVotedDown]=useState(0)
 const {description, title, upvote, downvote} = props


  function voteUp(){
    userAxios
    .put(`/api/issue/upvote/${props._id}`)
    .then((res,) => {
      setVotedUp(
        res.data.upvote
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  function voteDown(){
    userAxios
    .put(`/api/issue/downvote/${props._id}`)
    .then((res,) => {
      setVotedDown( res.data.downvote
      )
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
  <span className='title'>  <h1>{title}</h1>  like[{upvote}]dislikes[{downvote}]
  <button onClick={voteUp}>like</button>
  <button onClick={voteDown}>dislike</button>
  </span> 
  </div> 
  )
}