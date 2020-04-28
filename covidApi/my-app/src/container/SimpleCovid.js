import React, {useState, useEffect, createContext} from 'react'
import axios from "axios"
const ThemeContext = createContext()

function SimpleCovidProvider(props) {
  const [corona, setCorona]=useState([])
useEffect(()=>{
  axios.get("https://api.covid19api.com/countries")
  .then(res => {
    const coronaInfo=res.data
    console.log(11111,coronaInfo.ISO2)
   
    setCorona(res.data)
  })
  .catch(error => console.log(error))
},[])
  return (
    <ThemeContext.Provider value={{corona}} >
    { props.children }
    </ThemeContext.Provider>
  )
}
export { SimpleCovidProvider, ThemeContext}

