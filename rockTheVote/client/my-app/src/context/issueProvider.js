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
    issue: JSON.parse(localStorage.getItem('issue')) ? [JSON.parse(localStorage.getItem('issue'))] : [],
    upvote:0,
    downvote:0,
    description:'hey lets talk about',
  }

  const [issueState, setIssues]=useState(initState)
  const [issueId, setIssueId]=useState([])

  function getIssues() {
    userAxios
    .get("/api/issue")
    .then((res,) => {
      console.log(888,res);
      const randomIssue = res.data[Math.floor(Math.random() * 4)];
      localStorage.setItem('issue', JSON.stringify(randomIssue))
      setIssues({
        issue: [randomIssue],
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  

  return (
    <IssueContext.Provider
    value={{
      issueState,
      getIssues,
      getIssueId
    }}>
    {props.children}
    </IssueContext.Provider>
)
}

