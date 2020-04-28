import React, {useState, useEffect} from 'react'
import axios from "axios"
export default function Home() {
  const [infected, setInfected]=useState([])
  useEffect(()=>{
  axios.get("https://api.covid19api.com/live/country/afghanistan/status/confirmed")
  .then(res => {
    let infect=res.data
    console.log(2222255555,infect[10].Active)
    setInfected(res.data[10].Active)
  })
  .catch(error => console.log(error))
},[])

  return (
    <div>
      {infected}
    </div>
  )
}