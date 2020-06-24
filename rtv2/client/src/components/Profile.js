import React, {useEffect, useContext} from 'react'
import {UserContext} from '../context/UserProvider'



export default function Profile(){

  
  const {getUserComments}=useContext(UserContext)
  

  // useEffect(() => {
  //   getUserComments()
  // },[])

  
  return (
    <div className="todo-list">
     a
    </div>
  )
}