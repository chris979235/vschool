import React, {useState} from 'react'


export default function UglyMap(props) {
  const [inputData, setInputData] = useState({description: "", title: "", imgURL:"", _id: props._id})
  const [toggle, setToggle]=useState(true)

  function handleToggle(){
    setToggle( prevToggle => !prevToggle )
  }

  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => {
        return {
            ...prevInputData,
            [name]: value
        }
    })
}

function handleSubmit(e) {
  e.preventDefault()
 props.buttonEdit(inputData)
 setToggle(prevToggle => !prevToggle)
}

  return (
    <div className="box">
        {
          toggle?
    <div className="bord">
      <h2>{props.description}</h2>
      <h2>{props.title}</h2>
      <img src={props.imgURL} className="image" alt="ugly"/>
      <button onClick={handleToggle}>edit</button>  
      <button onClick={() => props.buttonDelete(props._id)}>delete</button>    
    </div>:
            <form onSubmit={handleSubmit}>
                <input 
                  placeholder="description"
                  name="description" 
                  value={inputData.description}
                  onChange={handleChange}
                />
                  
                <input 
                    placeholder="title"
                    name="title" 
                    value={inputData.title}
                    onChange={handleChange}
                />
                <input 
                  type="img"
                  placeholder="image"
                  name="imgURL" 
                  value={inputData.imgURl}
                  onChange={handleChange}
              />
              <br />
              <button >show ugly</button>
             </form>
      }
         </div>
  )
}
