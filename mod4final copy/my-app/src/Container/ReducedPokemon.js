import React, {useState, useEffect} from "react"
import {Link,} from "react-router-dom"
import axios from 'axios'



export default function ReducedPokemon(props) {
  const [poketMon, setPoketMon]=useState({pokemon:{},imgURL:''})
    useEffect(()=>{

       axios.get(props.pokeURL)
       .then(res =>{ 
        const poketMon = {pokemon:res.data, imgURL:res.data.sprites.front_default}
        console.log(11111,poketMon) 
        setPoketMon(poketMon)
        
        console.log(3333,res.data.name)
      })
      .catch(error => console.log(error))
    },[])  
  
    
  
  return (
    <div >
        <Link to={{pathname:`/About/${props.id}`, state:poketMon.pokemon}} pathname="pokemon"
        >
        {<img src={poketMon.imgURL} alt={poketMon.pokemon.name} 
         className="image"></img>}
        <p>whose that pokeman</p>
        </Link>
       
    </div>
  )
}
