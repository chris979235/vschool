import React, { Component } from "react";

export default class App extends Component {
  constructor (){
    super()
    this.state={
      firstName:"",
      age:"",
      namesArray:[]
    }
  }
  handleChange = (event) => {
    event.preventDefault()
    console.log(event.target)
    this.setState({[event.target.name]: event.target.value})
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.setState( (prevState) => {
          return {
            firstName:"",
            age:"",
            namesArray: [...prevState.namesArray, {name:prevState.firstName, age:prevState.age}]
          }
        }
        )
      }
  render() {

    return(
      <>
    <form onSubmit={this.handleSubmit}>
    <input 
    value={this.state.firstName} name="firstName" onChange={this.handleChange}>
    </input >
    <input 
    value={this.state.age} name="age" onChange={this.handleChange} type="number">
    </input>
    <button> clickme </button>
    </form>
    <h1> {this.state.firstName} {this.state.age}</h1>
     <ul className="list">
       {this.state.namesArray.map(function (person){
         return (
         <li> {person.name}  {person.age}</li>
         )
       })}
     </ul>
     </>
    )
  }
}
