import React, {createContext, useState, useEffect} from "react"
import axios from 'axios'
import ReducedPokemon from "./Container/ReducedPokemon"
const ThemeContext = createContext()



function ThemeContextProvider(props){
  const [pokemon, setPokemon] = useState([])
   useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(res =>{ 
     const poketMon = res.data.results  
      console.log(11111,poketMon) 
      setPokemon(poketMon)
    })
    .catch(error => console.log(error))
  },[])
  
  return (
    <ThemeContext.Provider value={{pokemon}}>
            { props.children }
        </ThemeContext.Provider>

)
}


export { ThemeContextProvider, ThemeContext}

