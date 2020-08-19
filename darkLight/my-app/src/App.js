import React, {useState} from 'react'

export default function App(){
  const [color, setColor]=useState("blue")

  
   function switchColor(){
       setColor(prevColor => prevColor === "red"?"blue":"red")
     }
    return(
    <div>
      <button 
      className={color}
      onClick={switchColor}
      >clickme</button>
      <h1 className={color}>{color}</h1>
    </div>
  )
}

