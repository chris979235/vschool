import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function Bountyhunter() {
  const [bounty, setBounty]=useState([])


  useEffect(()=>{
    axios.get('/').then(res => {
      console.log(222,res.data)
      const bountys=res.data
      console.log(1212,bountys)
      setBounty(bountys)
      console.log("set",setBounty(bountys))
    })

    .catch(error => console.log(error))
  },[])


  return (
    <div>
      {bounty}
    </div>
  )
}
