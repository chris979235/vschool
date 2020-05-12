import React, { useState } from 'react'
import MappedBounty from './MappedBounty.js'

export default function (props) {
    const [ isEditable, toggleEdit ] = useState(false)
    const [ editForm, setEditForm ] = useState({ firstName: props.firstName, lastName: props.lastName })
    return (
        <div>
            { isEditable ? <MappedBounty firstName={props.firstName} lastName={props.lastName} editForm={editForm} setEditForm={setEditForm} toggleEdit={toggleEdit}/> :  <h6>{props.firstName} { props.lastName }</h6> }
            <button onClick={ () => toggleEdit(!isEditable)}>{ isEditable ? "Cancel" : "Edit" }</button>
        </div>
    )
}