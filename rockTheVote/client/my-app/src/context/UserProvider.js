import React, {useState} from 'react'
import axios from 'axios'

export const UserContext=React.createContext()

const userAxios=axios.create()

userAxios.interceptors.request.use(config =>{
  const token=localStorage.getItem("token")
  config.headers.Authorization=`Bearer ${token}`
  return config
})

export default function UserProvider(props) {

  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem("token") || "",
    comments: [],
    errMsg:"",
  }

 

  const [userState, setUserState]=useState(initState)
  console.log(12343211,userState.user._id)
  console.log(7777,userState.user._id)



  function signup(credentials){
  axios.post("/auth/signup", credentials)
  .then(res => {
    const {user, token}=res.data
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
    setUserState(prevUserState =>({
      ...prevUserState,
      user,
      token
    }))
  })
  .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
    .then(res => {
      const {user, token}=res.data
      localStorage.setItem("token",token)
      localStorage.setItem("user", JSON.stringify(user))
      getUserComments()
      setUserState(prevUserState =>({
        ...prevUserState,
        user,
        token,
      }))
    })
    .catch(err => handleAuthError(err.response.data.errMsg))
  }

 

  function handleAuthError(errMsg){
  setUserState(prevState =>({
    ...prevState, 
    errMsg
  }))
  }

  function getUserComments(issueid){
    userAxios.get(`/api/comments/issue/${issueid}`)
    .then(res => {
      console.log(res.data)
      setUserState(prevState =>({
        ...prevState,
        comments:res.data
      }))
    })
    .catch(err=> console.log(err.response.data.errMsg))
  }

  function addComment(newComment){
  userAxios.post('/api/comments', newComment)
  .then(res => {
    setUserState( prevState=>({
      ...prevState,
      comments:[...prevState.comments, res.data]
    }))
  })
  .catch(err=> console.log(err.response.data.errMsg))
  }

  //put request for likes

  function resetAuthError(){
    setUserState(prevState => ({
      ...prevState, 
      errMsg:""
    }))
  }
 

  function deleteComment(commentsid) {
    userAxios
        .delete(`/api/comments/${commentsid}`)
        .then((res) => {
            setUserState((prev) =>
              ({
                ...prev,
                comments: prev.comments.filter((comments) => comments._id !== commentsid)
                })
            );
        })
        .catch((error) => console.log(error));
  }

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
        user: {},
        token: "",
        comments: [],
    });
}


  return (
      <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        addComment,
        resetAuthError,
        deleteComment,
        getUserComments,
        logOut,
        // getPostComment,
      }}>
      {props.children}
      </UserContext.Provider>
  )
}