import React, {useState, useEffect} from 'react'
import axios from 'axios'
import YourPosts from './YourPosts'
export const commentsAxios=axios.create()

commentsAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function MappingYourComments() {
const [userComment, setUserComment]=useState([])

console.log(userComment,444)

function getYourComments(){
  commentsAxios.get(`/api/comments/userid`)
  .then(res => {
    console.log(22,res.data)
    setUserComment(
      res.data
    )
  })
  .catch(err=> console.log(err.response.data.errMsg))
}

useEffect(()=>{
  getYourComments()
},[])

const mappedUserComments=userComment.map(function(userComment){
  return <YourPosts userComment={userComment} key={userComment._id} />
})

return (
  <div className="user">
{mappedUserComments}
    </div>
  )
}

