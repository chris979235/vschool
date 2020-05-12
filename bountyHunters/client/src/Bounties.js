import React, {useState, useEffect} from 'react'
import axios from 'axios'
import MappedBounty from "./MappedBounty"
export default function Bountyhunter() {
  const [bounties, setBounty]=useState([])


  useEffect(()=>{
    axios.get('/bounties').then(res => {
      console.log(222,res.data)
      const bountys=res.data
      setBounty(bountys)
      console.log("set",setBounty(bountys))
    })

    .catch(error => console.log(error))
  },[])

  

  const mappedBounties = bounties.map(newbounty => {
   return <MappedBounty firstName={newbounty.firstName} lastName={newbounty.lastName}
   living={newbounty.living} bounty={newbounty.bounty} type={newbounty.type}
   />
  })
  return (
    <div>
      {mappedBounties}
    </div>
  )
}
