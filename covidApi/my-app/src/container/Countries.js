import React, {useContext} from 'react'
import Country from "./Country"
import {ThemeContext} from "./SimpleCovid"

export default function Countries() {
  const {corona}=useContext(ThemeContext)
  console.log(123456,corona.sort())
  
  function compare(a,b){
    const coroA=a.Country.toUpperCase()
    const coroB=b.Country.toUpperCase()
    let comparison = 0;
    if (coroA > coroB) {
      comparison = 1;
    } else if (coroA < coroB) {
      comparison = -1;
    }
    return comparison;
  }
  corona.sort(compare)
  
  const mappedCountries=corona.map(function(newCountry, index){
    return <Country key={newCountry.IS02} country={newCountry.Country} />
  })
  return (
    <div>
      {mappedCountries}
    </div>
  )
}
