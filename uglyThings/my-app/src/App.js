import React, {useState} from "react"
import UglyMap from "./UglyMap"
import uuid from 'react-uuid'

export default function App() {
    const [inputData, setInputData] = useState({description: "", title: "", imgURL:"", _id: ""})
    const [uglyData, setUglyData] = useState([])
    
    function handleChange(event) {
        const {name, value} = event.target
        setInputData(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      setInputData({description: "", title: "", imgURL:"", _id: ""})
      setUglyData(prevUglyData => [...prevUglyData, {...inputData, _id: uuid()}])
    }
  
   
   function deleted(_id){
    setUglyData(prevUglyData => prevUglyData.filter(ugly => ugly._id !== _id))
   }

   function edit(edits){
    setUglyData(prevUglyData => {
     const index= prevUglyData.indexOf(ugly => ugly._id === edits._id)
     const starting=prevUglyData.slice(0,index)
     const ending=prevUglyData.slice(index+2, prevUglyData.length)
     return [...starting,edits,...ending]
    })
    }

    
  const contacts = uglyData.map( (newUgly, _id) => <UglyMap key={_id} buttonEdit={edit}  buttonDelete={deleted} _id={newUgly._id} description={newUgly.description} title={newUgly.title} imgURL={newUgly.imgURL}/>)
    
    return (
      <div className="box">
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
              <button>show ugly</button>
          </form>
          <div>{contacts}</div>
      </div>
    )
}


///onblur(), <labels>


