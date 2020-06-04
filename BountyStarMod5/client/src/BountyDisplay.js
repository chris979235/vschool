import React, {useState} from 'react'
import BountyForm from './BountyForm'

export default function BountyDisplay(props) {
 const {firstName,lastName,living,bounty,type, _id}=props
 const [editToggle, setEditToggle]=useState(false)
  return (
    <div>
      { !editToggle ?
      <>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <h3>Status: {living}</h3>
        <h3>Bounty: {bounty}</h3>
        <h3>Class: {type}</h3>
        <button onClick={() => props.deleteBounty(_id)}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
      </>
        :
        <>
          <BountyForm
          firstName={firstName}
          lastName={lastName}
          living={living}
          bounty={bounty}
          type={type}
          _id={_id}
          btnText="submit edit"
          submit={props.editBounty}
          />
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)}>close</button>
       </>
      }
    </div>
  )
}
