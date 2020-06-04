import React, { useState, useEffect } from 'react';
import {withTodos} from './TodoProvider'

    function Form(props){
    const [input, setInput]=useState({
    title: '',
    description: '',
    button: props.button || 'Click Here'
    })


    useEffect(()=>{

       if(props.type === 'edit'){
          let {title, description} = props.todo
          setInput({title, description})
      }
    },[])
    

   const handleChange = e => {
        setInput({[e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.type === 'add' ? props.postTodo(input) : props.editTodo(props.todo._id, input)
    }

        return (
            <form onSubmit={handleSubmit} className={props.type === 'add' ? 'todo-submit' : 'edit-todo'}>
                    <input type="text"
                           placeholder='Todo Title' 
                           name='title' 
                           value={input.title} 
                           onChange={handleChange} />
                    <input type="text" 
                           placeholder='Todo Description' 
                           name='description' 
                           value={input.description} 
                           onChange={handleChange} />
                    <button>{input.button}</button>
                </form>
    
        );
    }
  



export default withTodos(Form);