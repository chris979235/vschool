import React, {useContext} from 'react'
import {ThemeContext} from "../ThemeContext"
import ReducedPokemon from './ReducedPokemon'

export default function PokemonList() {
  const { pokemon } = useContext(ThemeContext)
  const mappedPokemon=pokemon.map(function (singlePoke, index){
    const seconedToLastIndexOf = singlePoke.url.slice(0,singlePoke.url.length-2).lastIndexOf("/")
    const id=singlePoke.url.slice(seconedToLastIndexOf+1,singlePoke.url.length-1)
    console.log(id)
    return <ReducedPokemon key={id} id={id} name={singlePoke.name} pokeURL={singlePoke.url}/>
  })
  return (
    <div>
      {mappedPokemon}
    </div>
  )
}
