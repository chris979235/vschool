import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Dog() {
  let [dog, setdog]=useState([])
  useEffect(()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      const dog=res.data.message
      console.log(dog)
      setdog(dog)
    })
    .catch(error => console.log(error))
  },[])

  function clicker(){
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      const dog=res.data.message
      console.log(dog)
      setdog(dog)
    })
  }
  return (
    <div className="container">
      <img src={dog} className="dog"></img>
      <br></br>
      <button onClick={clicker}>click for new photo</button>
    </div>
  )
}
