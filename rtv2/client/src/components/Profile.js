import React, {useEffect, useContext} from 'react'
import {UserContext} from '../context/UserProvider'
export default function Profile(props){

  
  const {getUserComments}=useContext(UserContext)
  
  console.log(2134567,props)


  useEffect(() => {
    getUserComments(props._id)
  },[props._id])

  
  return (
    <div className="todo-list">
     a
    </div>
  )
}