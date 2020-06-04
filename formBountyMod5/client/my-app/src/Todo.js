import React, { useState,useContext } from 'react';
import Form from './Form';
import {withTodos} from './TodoProvider';

function Todo() {
  const { todo ,deleteTodo } = useContext(withTodos)
  const [toggles, setToggle]=useState({
    toggled:true
  })
       

        const toggle = () => {
              setToggle(prevState =>  prevState.toggled = !prevState.toggled
        )
    }

        return (
            <div className='TODO'>
                {toggles.toggled ?
                    <div className='todo'>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                        <button onClick={toggle}>Edit</button>
                    </div>
                :
                    <Form button="Save Changes" type='edit' todo={todo} />
                }
            </div>
        );
    }

export default withTodos(Todo);