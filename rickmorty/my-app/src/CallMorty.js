import React, {useEffect, useState} from 'react'
import axios from "axios"
import MortyProps from './MortyProps'
export default function CallMorty() {
  const [morty, setMorty]=useState([])

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res =>{
      const mortify=res.data.results
      console.log(mortify)
      setMorty(mortify)
    })
    .catch(error => console.log(error))
  },[])
  const mortified=morty.map(function (newmort, index){
    return <MortyProps key={index} name={newmort.name} status={newmort.status} species={newmort.species}/>
  })
  return (
    <div>
      {mortified}
    </div>
  )
}
