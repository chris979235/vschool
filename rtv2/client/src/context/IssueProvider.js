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
  const [votedUp, setVotedUp]=useState(0)
  const [votedDown, setVotedDown]=useState(0)
  console.log(issueState,'issuestate')

  const getIssues = useCallback(() => {
    userAxios
    .get("/api/issue")
    .then((res,) => {
      console.log(888,res.data);
      localStorage.setItem('issue', JSON.stringify(res.data))
      setIssues({
        issue: [res.data],
      });
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
    setVotedUp(
      res.data.upvote
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
    setVotedDown( res.data.downvote
    )
  })
  .catch((err) => {
    console.log(err);
  });
}


  return (
    <IssueContext.Provider
    value={{
      ...issueState,
      voteUp,
      voteDown,
      // getIssues,
    }}>
    {props.children}
    </IssueContext.Provider>
)
}
