import React, {useEffect, useContext} from 'react'
import {UserContext} from '../context/UserProvider'
export default function Profile(props){

  // console.log(2134567,props)

  const {getUserComments}=useContext(UserContext)
  


  useEffect(() => {
    getUserComments(props._id)
  },[props._id])

  
  return (
    <div className="todo-list">
     a
    </div>
  )
}