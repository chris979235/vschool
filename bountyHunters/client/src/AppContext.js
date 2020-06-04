import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
const { v4: uuid } = require('uuid');
export const MyContext = createContext()

export default function (props) {
    const [ form, setForm ] = useState({ firstName: "", lastName: "",living:'',bounty:"",type:'', id:uuid()})
    const [ people, setPeople ] = useState([])

    useEffect(()=>{
      axios.get('/bounties')
      .then(res =>{
        const result=res.data
        setPeople(result)
      })
      .catch(error => console.log(error))
  },[])

    return (
        <MyContext.Provider value={{ form, setForm, people, setPeople }}>
            { props.children }
        </MyContext.Provider>
    )
}
