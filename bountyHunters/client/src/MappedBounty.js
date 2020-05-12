import React, {useState} from 'react'
const { v4: uuid } = require('uuid');
export default function MappedBounty(props) {
  const [bounty, setBounty]=useState({firstName:'',lastName:'',bounty:'',type:'',status:'', _id:props._id})
  const [toggle, setToggle]=useState(true)

  function handleToggle(){
    setToggle( prevToggle => !prevToggle )
  }

  function handleChange(event) {
    const {name, value} = event.target
    setBounty(prevBounty => {
        return {
            ...prevBounty,
            [name]: value
        }
    })
}

function handleSubmit(event) {
  event.preventDefault()
  props.buttonEdit(bounty)
  // setBounty({firstName:'',lastName:'',bounty:'',type:'',status:'', _id:props._id})
 setToggle(prevToggle => !prevToggle)
}

  return (
    <div>
      {
        toggle?
      <div>
      <h2>Wanted: {props.firstName}-{props.lastName}</h2>
      <h3>Status: {props.living}</h3>
      <h4>Bounty: {props.bounty}</h4>
      <h4>Alighnment: {props.type}</h4>
      <button onClick={handleToggle}>edit</button>  
      <button onClick={() => props.buttonDelete(props._id)}>delete</button> 
      </div>:
      <form onSubmit={handleSubmit}>
      <input 
        placeholder="firstname"
        name="firstName" 
        value={bounty.firstName}
        onChange={handleChange}
      />
        
      <input 
          placeholder="lastname"
          name="lastName" 
          value={bounty.lastName}
          onChange={handleChange}
      />
      <input 
        placeholder="type"
        name="type" 
        value={bounty.type}
        onChange={handleChange}
        
    />
      <input 
        placeholder="bounty"
        name="bounty" 
        value={bounty.bounty}
        onChange={handleChange}
    />
     <input 
        placeholder="dead or alive"
        name="status" 
        value={bounty.status}
        onChange={handleChange}
    />
    <br />
    <button>update</button>
   </form>
}
    </div>
  )
}
