import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const IssueContext=React.createContext()

const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function IssueProvider(props) {


  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem("token") || "",
    errMsg:"",
    issues: [],
    upvote:0,
    downvote:0,
  }

  
  const [issueState, setIssues]=useState(initState)
  console.log(issueState,5555577)

  function getIssues() {
    userAxios
    .get("/api/issues")
    .then((res,) => {
      console.log(888,res);
      const issues = res.data;
      setIssues({
        issues: [...issues],
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

 useEffect(()=>{
   getIssues()
 },[])


  return (
    <IssueContext.Provider
    value={{
      issueState,
      getIssues,
    }}>
    {props.children}
    </IssueContext.Provider>
)
}