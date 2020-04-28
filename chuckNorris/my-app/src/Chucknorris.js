import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Chucknorris() {
  let [chuck, setChuck]=useState([])
useEffect(()=>{
  axios.get("https://api.chucknorris.io/jokes/random")
  .then(res => {
    const chuck=res.data.value
    console.log(1111,chuck)
    setChuck(chuck)
    console.log(2222,setChuck(chuck))
  })
  .catch(error => console.log(error))
},[])

function clicker(){
  axios.get("https://api.chucknorris.io/jokes/random")
  .then(res => {
    const chuck=res.data.value
    console.log(1111,chuck)
    setChuck(chuck)
    console.log(2222,setChuck(chuck))
  })
  .catch(error => console.log(error))
}
  return (
    <div className="container">
      <div className="container2a">
        <p>{chuck}</p>
        <p>click for a new joke</p>
        <button onClick={clicker}>clickme</button>
      </div>
    </div>
  )
}
