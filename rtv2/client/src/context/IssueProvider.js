import React, {useState, useCallback, useEffect} from 'react'
import axios from 'axios'

export const IssueContext=React.createContext()

export const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

 export default function IssueProvider(props) {


  

  
  const [issues, setIssues]=useState([])
  const [votedUp, setVotedUp]=useState(0)
  const [votedDown, setVotedDown]=useState(0)

  const getIssues = useCallback(() => {
    userAxios
    .get("/api/issue")
    .then((res,) => {
      setIssues(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  
useEffect(()=>{
  getIssues()
},[getIssues])


function voteUp(issueid){
  userAxios
  .put(`/api/issue/upvote/${issueid}`)
  .then((res,) => {
    setIssues( prev =>{  
     const foundIssue= prev.findIndex((issue) => issue._id===issueid) 
     const edditedObject={...prev[foundIssue], upvote: res.data.upvote}
     const begining = prev.slice(0, foundIssue)
     const ending = prev.slice(foundIssue +1)
     return [...begining, edditedObject, ...ending]
    }
    );
  })
  .catch((err) => {
    console.log(err);
  });
}

function voteDown(issueid){
  userAxios
  .put(`/api/issue/downvote/${issueid}`)
  .then((res,) => {
    setIssues( prev =>{  
     const foundIssue= prev.findIndex((issue) => issue._id===issueid) 
     const edditedObject={...prev[foundIssue], downvote: res.data.downvote}
     const begining = prev.slice(0, foundIssue)
     const ending = prev.slice(foundIssue +1)
     return [...begining, edditedObject, ...ending]
    }
    );
  })
  .catch((err) => {
    console.log(err);
  });
}


  return (
    <IssueContext.Provider
    value={{
      issues,
      voteUp,
      voteDown,
      getIssues,
    }}>
    {props.children}
    </IssueContext.Provider>
)
}
