import React, {useContext, useEffect, useState} from 'react'
import {ThemeContext} from "./SimpleCovid"
import Infected from './Infected'
export default function Simpleinfected() {
  const [infected, setInfected]=useState([])
  const {corona}=useContext(ThemeContext)
  const mappedSlug=corona.map(function(slugs){
    console.log(222223333,slugs)
    return <Infected Slug={slugs.Slug}/>
  })
  
  return (
    <div>
      {infected}
      {mappedSlug}
    </div>
  )
}
