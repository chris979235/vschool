import React, { useContext } from 'react'
import { MyContext } from './AppContext.js'

export default function (props) {
    const { form, setForm, setPeople } = useContext(MyContext)
    function handleChange (e) {
        const { name, value } = e.target
        setForm( prevForm => {
            return {
                ...prevForm,
                [ name ]: value
            }
        })
    }

    function handleSubmit (e) {
        //Axios call
        // In the .then()
        e.preventDefault()
        setPeople( prevPeople => {
            return [ form, ...prevPeople]
        })
        setForm({ firstName: "", lastName: ""})
    }

    function handleEditChange (e) {
        const { name, value } = e.target
        props.setEditForm( prevForm => {
            return {
                ...prevForm,
                [ name ]: value
            }
        })
    }

    function handleEditSubmit (e) {
        e.preventDefault()
        setPeople( prevPeople => {
            const updatedPeople = prevPeople.map( person => person.firstName !== props.firstName && person.lastName !== props.lastName ? { firstName: person.firstName, lastName: person.lastName } : { firstName: props.editForm.firstName, lastName: props.editForm.lastName } )
            return updatedPeople
        })
        props.toggleEdit()
    }

    return (
        <form onSubmit={props.firstName ? handleEditSubmit : handleSubmit}>
            <input onChange={props.firstName ? handleEditChange : handleChange} name="firstName" value={props.firstName ? props.editForm.firstName : form.firstName} type="text" placeholder="first name" />
            <input onChange={props.firstName ? handleEditChange : handleChange} name="lastName" value={props.firstName ? props.editForm.lastName : form.lastName} type="text"  placeholder="last name"/>
            <button>Submit</button>
        </form>
    )
}

