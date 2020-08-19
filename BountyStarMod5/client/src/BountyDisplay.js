import React, {useState} from 'react'
import BountyForm from './BountyForm'

export default function BountyDisplay(props) {
 const {firstName,lastName,living,bounty,type, _id, image}=props
 const [editToggle, setEditToggle]=useState(false)
  return (
    <div>
      { !editToggle ?
      <>
      <div className='star'>
        <h3 className='bounty'>Bounty: {bounty}</h3>
      <h2>{firstName} {lastName}</h2>
        <h3>Status: {living}</h3>
        <h3>Class: {type}</h3>
        <img src={image}/>
        <button onClick={() => props.deleteBounty(_id)}>delete</button>
        <button onClick={()=> setEditToggle(prevToggle => !prevToggle)}>edit</button>
      </div>
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
          <button  onClick={()=> setEditToggle(prevToggle => !prevToggle)} className='button2'>close</button>
       </>
      }
    </div>
  )
}
