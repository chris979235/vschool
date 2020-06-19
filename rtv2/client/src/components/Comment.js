import React, {useEffect} from 'react'


export default function Comment(props) {
  const {deleteComment}=props

console.log(props,123)

  useEffect(() => {
   deleteComment(props._id)
  }, [])

  return (
    <div> 
       <span className='title'>{props.title}</span>

         <br></br>
       <span className='text'>{props.text}</span>
       
       <span className='description'>{props.description} </span> 
      
    </div>
  )
}
