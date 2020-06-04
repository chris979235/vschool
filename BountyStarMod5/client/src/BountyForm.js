import React, {useState} from 'react'
import axios from "axios"
export default function BountyForm(props) {
  const initialInputs={firstName: props.firstName || "",  lastName: props.lastName||'',
  living:props.living||'',  bounty:props.bounty||'',  type:props.type||'',}
  const [inputs, setInputs]=useState(initialInputs)

  function handleChange(e){
    const {name, value}=e.target
    setInputs(prevInputs=> ({...prevInputs,[name]:value}))
  }

  function handleSubmit(e){
     e.preventDefault()
     props.submit(inputs, props._id)
     console.log(inputs)
     setInputs(initialInputs)
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <div className="container2">
        <input name='firstName' value={inputs.firstName} onChange={handleChange} placeholder="First Name" />
        <input name='lastName' value={inputs.lastName} onChange={handleChange} placeholder="Last Name" />
        <input name='living' value={inputs.living} onChange={handleChange} placeholder="Dead or Alive" />
        <input name='bounty' value={inputs.bounty} onChange={handleChange} placeholder="Bounty" />
        <input name='type' value={inputs.type} onChange={handleChange} placeholder="sith or jedi"/>
        <button>{props.btnText}</button>
        </div>
      </form>

    </div>
  )
}
