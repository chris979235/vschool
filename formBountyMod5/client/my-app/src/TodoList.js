import React, { useEffect } from 'react';
import Todo from './Todo'
import {withTodos} from './TodoProvider'

  function TodoList(props){
console.log(props)
    useEffect(()=>{
      props.getTodos()
    })
  

        const mappedTodos = props.todos.map(todo => <Todo key={todo._id} todo={todo} />)
        return (
            <div className='todo-list'>
                {mappedTodos}
            </div>
        );
    }

export default withTodos(TodoList);