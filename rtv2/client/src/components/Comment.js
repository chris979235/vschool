import React, {useEffect} from 'react'


export default function Comment(props) {
  const {deleteComment}=props
console.log(props,2222233)
console.log(props,123)



  return (
    <div> 
       <span className='text'>{props.text}</span>
        <button onClick={ () => deleteComment(props._id,)}>delete</button>
    </div>
  )
}
