import React from 'react'
import styled from 'styled-components'

export default function Comment(props) {
  const {deleteComment}=props
  console.log(props,55555)


  return (
    <Div> 
       <span className='text'>{props.text}</span>
        <button onClick={ () => deleteComment(props._id, props.user)}>delete</button>
    </Div>
  )
}

const Div=styled.div`
display:flex;
flex-wrap:wrap;
justify-content: left;
`