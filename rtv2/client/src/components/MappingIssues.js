import React, {useEffect, useState, useCallback} from 'react'
import Profile from './Profile'
import Public from './Issue'
import axios from 'axios'
import Comment from './Comment'
import CommentsList from './CommentsList'
import Issue from "./Issue"

export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function MappingIssues() {
  
  const [issueState, setIssues]=useState([])

  console.log(333,issueState._id)


  const getIssues = useCallback(() => {
    userAxios
    .get("/api/issue")
    .then((res,) => {
      console.log(88877,res.data);
      setIssues( res.data,
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
useEffect(()=>{
  getIssues()
},[getIssues])






  return (
    <div>
       {issueState.map(issue => <Public {...issue} key={issue._id} />)}
       {issueState.map(issue => <CommentsList {...issue} key={issue._id} />)}
    </div>
  )
}
