import React, { useState } from 'react'
import MappedBounty from './MappedBounty.js'

export default function (props) {
    const [ isEditable, toggleEdit ] = useState(false)
    const [ editForm, setEditForm ] = useState({ firstName: props.firstName, lastName: props.lastName,
    living: props.living, bounty:props.bounty, type:props.type})
    
    return (
        <div>
            { isEditable ? 
            
            <MappedBounty firstName={props.firstName} 
                          lastName={props.lastName} 
                          living={props.living}
                          bounty={props.bounty} 
                          type={props.type}
                          editForm={editForm} 
                          setEditForm={setEditForm} 
                          toggleEdit={toggleEdit}/> 
                    :
            <div> 
               <h3>{props.firstName} { props.lastName }</h3>
               <h4>{props.living}</h4> <h4>{props.bounty}</h4><h4>{props.type}</h4>
            </div>
            }
            <button onClick={ () => toggleEdit(!isEditable)}>{ isEditable ? "Cancel" : "Edit" }</button>
        </div>
    )
}