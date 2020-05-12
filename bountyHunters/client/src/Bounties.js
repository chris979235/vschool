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

  function deleted(_id){
    setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== _id))
   }

  function edit(edits){
    setBounty(prevBounty => {
     const index= prevBounty.indexOf(bounty => bounty._id === edits._id)
     const starting=prevBounty.slice(0,index)
     const ending=prevBounty.slice(index+2, prevBounty.length)
     
     console.log(21,edits)
     console.log(starting,ending,123)
     return [...starting,edits,...ending]
    })
    }

    

  const mappedBounties = bounties.map((newbounty, _id) => {
   return <MappedBounty key={_id} firstName={newbounty.firstName} lastName={newbounty.lastName}
   living={newbounty.living} bounty={newbounty.bounty} type={newbounty.type} buttonEdit={edit} 
   buttonDelete={deleted} 
   />
  })
  return (
    <div>
      {mappedBounties}
    </div>
  )
}
