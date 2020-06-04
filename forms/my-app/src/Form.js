import React, {useState} from 'react'
import Card from './Card'
export default function Form() {
  const [input, setInput]=useState({
    firstName:'',
    lastName:'',
    age:'',
    peoples:[]
  })

  function handleChange (e) {
    const { name, value } = e.target
    setInput( prevForm => {
        return {
            ...prevForm,
            [ name ]: value
        }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setInput(prevInput =>{
      const newPerson={
        firstName:prevInput.firstName,
        lastName:prevInput.lastName,
        age:prevInput.age,
        id:Math.floor(Math.random()*1000)
      }
      return {...prevInput, peoples: [newPerson, ...prevInput.peoples]}
    })
  }


  function deleted(id){
    setInput(prevInput =>{
      const updated=prevInput.peoples.filter((individual)=> individual.id!==id )
      return {...prevInput, peoples: updated}
    })
  }

  function handleEditSubmit(edits){
    setInput(prevInput =>{
      const mappedEdits=prevInput.peoples.map((individual)=>{
        console.log(edits.id===individual.id)
        if(individual.id===edits.id){
          return edits
        }else {
          return individual
        }
      })
      return {...prevInput, peoples:mappedEdits}
    })
  }


  const mappedPeople=input.peoples.map(function (newPerson){
   return <Card newPerson={newPerson} handleEditSubmit={handleEditSubmit} deleted={deleted}/>
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="first name"
        name="firstName"
        value={input.firstName}
        onChange={handleChange}
        />
        <input
        placeholder="last name"
        name="lastName"
        value={input.lastName}
        onChange={handleChange}
        />
        <input
        placeholder="age"
        name="age"
        value={input.age}
        onChange={handleChange}
        />
        <button>submit</button>
      </form>
      {mappedPeople}
    </div>
  )
}
