// import React, {useState} from 'react'
// import axios from 'axios'

// export const issueContext=React.createContext()

// const userAxios=axios.create()

// userAxios.interceptors.request.use(config =>{
//   const token=localStorage.getItem("token")
//   config.headers.Authorization=`Bearer ${token}`
//   return config
// })

// export default function issueProvider(props) {

//   const initState = {
//     user: JSON.parse(localStorage.getItem('user')) || {},
//     token: localStorage.getItem("token") || "",
//     errMsg:"",
//     issues:'',
//     upvote:0,
//     downvote:0,
   
//   }

//   const [userState, setUserState]=useState(initState)

//   function addLike(upvoteId){
//     userAxios
//     .put(`/api/issue/upvote/${upvoteId}`)
//     .then()
//   }


//   return (
//     <issueContext.Provider
//     value={{
//       ...userState,
//       addLike,
     
//     }}>
//     {props.children}
//     </issueContext.Provider>
// )
// }

// }