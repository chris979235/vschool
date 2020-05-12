import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const MyContext = createContext()

export default function (props) {
    const [ form, setForm ] = useState({ firstName: "", lastName: "" })
    const [ people, setPeople ] = useState([])

    useEffect(()=>{
      axios.get('/bounties')
      .then(res =>{
        const result=res.data
        console.log(1111,result)
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
