import React, {useState} from 'react'
//destructering functions and  new array being made

export default function Card({newPerson, handleEditSubmit, deleted}) {

  function handleEditChange (e) {
    const { name, value } = e.target
    setEditInputs( prevForm => {
        return {
            ...prevForm,
            [ name ]: value
        }
    })
  }

  

  const [editInput, setEditInputs]=useState(newPerson)
  return (
  <div>
    <p>{newPerson.firstName}</p>
    <p>{newPerson.lastName}</p>
    <p>{newPerson.age}</p>
    <input
      placeholder="first name"
      name="firstName"
      value={editInput.firstName}
      onChange={handleEditChange}
      />
      <input
      placeholder="last name"
      name="lastName"
      value={editInput.lastName}
      onChange={handleEditChange}
      />
      <input
      placeholder="age"
      name="age"
      value={editInput.age}
      onChange={handleEditChange}
      />
      <button onClick={()=>handleEditSubmit(editInput)}>save</button>
      <button onClick={()=>deleted(newPerson.id)}>delete</button>
  </div>
  )
}
