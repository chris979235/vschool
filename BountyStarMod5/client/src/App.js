import React, {useState, useEffect} from 'react'
import BountyDisplay from './BountyDisplay'
import axios from "axios"
import BountyForm from './BountyForm'
export default function BountyAxios() {
  const [bounty, setBounty]=useState([])
  
  function getBounties(){
    axios.get('/routes/bounties')
    .then(res => setBounty(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }
  function addBounty(newBounty){
    axios.post('/routes/bounties', newBounty)
    .then(res => {
      setBounty(prevBounty=> [...prevBounty, res.data])
    })
    .catch(error => console.log(error)) 
  }

  function deleteBounty(bountyId ){
    axios.delete(`/routes/bounties/${bountyId}`)
    .then(res => {
      console.log(111,bounty)
      setBounty(prevBounty => prevBounty.filter(bounty=>bounty._id!==bountyId))
    })
    .catch(error => console.log(error)) 
  }

  function editBounty(update, bountyId){
    axios.put(`/routes/bounties/${bountyId}`, update)
    .then(res => {
      setBounty(prevBounty=> prevBounty.map(bounty=>bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(error => console.log(error)) 
  }


  useEffect(()=>{
   getBounties()
  },[])

  function handleFilter(e){
    if(e.target.value==="reset"){
      getBounties()
    }else{
    axios.get(`/routes/bounties/search/type?type=${e.target.value}`)
    .then(res => setBounty(res.data))
    .catch(err => console.log(err))
    }
  }

  return (
    <div>
      <div className='filter'>
       <h4>filter by sith or jedi</h4>
        <select onChange={handleFilter} >
          <option value="reset">sith and jedi</option>
          <option value="sith">sith</option>
          <option value="jedi">jedi</option>
        </select>
      </div>
      
      <BountyForm
      submit={addBounty}
      btnText={'add Bounty'}
      />
      {bounty.map(bounties => <BountyDisplay {...bounties} key={bounties._id}
      deleteBounty={deleteBounty}
      editBounty={editBounty}
      />)}

    </div>
  )
}
