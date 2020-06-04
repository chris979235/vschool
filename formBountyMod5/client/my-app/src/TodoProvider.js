import React, { useState } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

export default function TodoProvider(props){
    const [todos, setTodos]=useState([])
    console.log(11111,todos)

        // GET
    const getTodos = () => {
        axios.get('/todo').then(res => {
          const result=res.data
          setTodos(result)
        })
    }
  
    // POST
   const postTodo = newTodo => {
        axios.post('/todo', newTodo).then(response => {
            setTodos(prevState => [...prevState, response.data])
        })
    }

    // PUT
    const editTodo = (id, updatedTodo) => {
        axios.put(`/todo/${id}`, updatedTodo).then(res => {
            setTodos(prevState =>  prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
            )
        })
    }


    // DELETE
   const deleteTodo = id => {
        axios.delete(`/todo/${id}`).then(response => {
            setTodos(prevState => prevState.todos.filter(todo => todo._id !== id)
            )
        })
    }


        return (
            <Provider value={{
                getTodos,
                postTodo,
                editTodo,
                deleteTodo,
                todos
            }}>
                {props.children}
            </Provider>
        );



  }   
export function withTodos (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}