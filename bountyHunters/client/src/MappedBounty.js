import React, { useContext } from 'react'
import { MyContext } from './AppContext.js'
const { v4: uuid } = require('uuid');

export default function (props) {
    const { form, setForm, setPeople } = useContext(MyContext)
    console.log(props, 'props in mapped bounty')
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
        e.preventDefault()
        setPeople( prevPeople => {
            return [ form, ...prevPeople]
        })
        setForm({ firstName: "", lastName: "", living:'', bounty:'', type:'', _id:uuid()})
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
        setPeople( prevPeople => prevPeople.map( person => person._id === person._id))
        props.toggleEdit()
    }

    return (
        <form onSubmit={props.firstName ? handleEditSubmit : handleSubmit}>
            <input onChange={props._id ? handleEditChange : handleChange} name="firstName" value={props.firstName ? props.editForm.firstName : form.firstName} type="text" placeholder="first name" />
            <input onChange={props.frstName ? handleEditChange : handleChange} name="lastName" value={props.firstName ? props.editForm.lastName : form.lastName} type="text"  placeholder="last name"/>
            <input onChange={props.firstName ? handleEditChange : handleChange} name="living" value={props.firstName ? props.editForm.living : form.living} type="text" placeholder="living" />
            <input onChange={props.firstName ? handleEditChange : handleChange} name="bounty" value={props.firstName ? props.editForm.bounty : form.bounty} type="text"  placeholder="bounty"/>
            <input onChange={props.firstName ? handleEditChange : handleChange} name="type" value={props.firstName ? props.editForm.type : form.type} type="text"  placeholder="type"/>
            <button>Submit</button>
        </form>
    )
}

