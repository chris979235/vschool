import React, {useEffect, useState, useCallback} from 'react'
import {UserContext} from '../context/UserProvider'
import axios from 'axios'

export const issueAxios=axios.create()

issueAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})


export default function MakeIssue(props){
  
  
  const [input, setInput] = useState({title:'', description:''})
  const [issue, setIssue]=useState([])
  console.log(11111,input)

    const getIssues = useCallback(() => {
      issueAxios
      .get("api/issue")
      .then((res,) => {
        console.log(888,res.data);
        setIssue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])

      function addIssue(newIssue){
      issueAxios.post('api/issue', newIssue)
      .then(res => {
        console.log(res,55555)
        setIssue(prev=> [...prev, res.data])
      })
      .catch(err=> console.log(err))
      }
  
    function handleSubmit(e){
      e.preventDefault()
      addIssue({title: input.title, description: input.description})
      setInput('')
    }

    function handleChange(e){
      const {name, value}=e.target
      setInput(prevInputs=> ({...prevInputs,[name]:value}))
    }
    
  useEffect(()=>{
    getIssues()
  },[])

    return (
      <div>
        create an issue youd like to talk about
       <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            value={input.title} 
            onChange={handleChange} 
            placeholder='title'/>
             <input 
            type="text" 
            name="description" 
            value={input.description} 
            onChange={handleChange} 
            placeholder='description'/>
          <button>Add title</button>
        </form>
        </div>
        )
    }