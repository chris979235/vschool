import React, {useState}from 'react'
import Form from "./Form"
export default function App() {
  const [count, setCount] = useState(1)
  
  function increment() {
      setCount(prevCount => prevCount + 1)
  }
  
  function decrement() {
      setCount(prevCount => prevCount - 1)
  }
  
  function double(){
      setCount(prevCount => prevCount * 2)
  }
  
  return (
      <div>
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={double}>double</button>
          <hr></hr>
          <Form/>
      </div>
  )
}
