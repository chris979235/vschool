import React, { Component } from 'react'
import Badge from "./Badge"
export default class App extends Component {
  constructor (){
    super()
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      placeOfBirth:"",
      phone:"",
      favoriteFood:"",
      textBox:"",
      badges:[]
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    this.setState({[name]: value})
      }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState( (prevState) => {
      return {
        firstName:"",
        lastName:"",
        email:"",
        placeOfBirth:"",
        phone:"",
        favoriteFood:"",
        textBox:"",
        badges: [...prevState.badges, 
          {firstName:prevState.firstName, 
            lastName:prevState.lastName,
            email:prevState.email,
            placeOfBirth:prevState.placeOfBirth,
            phone:prevState.phone,
            favoriteFood:prevState.favoriteFood,
            textBox:prevState.textBox
          }]
      }
    })
  }
  render() {
   const mappedbadges= this.state.badges.map(function(badge){
      return <Badge 
      firstName={badge.firstName}
      lastName={badge.lastName}
      email={badge.email}
      placeOfBirth={badge.placeOfBirth}
      phone={badge.phone}
      favoriteFood={badge.favoriteFood}
      textBox={badge.textBox}
      />
    })
    return (
      <>
        <form onSubmit={this.handleSubmit} className="formcontainer">
        <div className="container">
        <input value={this.state.firstName} 
        name="firstName" placeholder="firstsName"
        onChange={this.handleChange} 
        className="one">
        </input>
        <input value={this.state.lastName} 
        placeholder="lastName"
        name="lastName" onChange={this.handleChange} 
        className="two">
        </input>
        <input value={this.state.email} 
        placeholder="email"
        name="email" onChange={this.handleChange} 
        className="three">
        </input>
        <input value={this.state.placeOfBirth} 
        placeholder="placeOfBirth"
        name="placeOfBirth" onChange={this.handleChange} 
        className="four">
        </input>
        <input value={this.state.phone}
         placeholder="phoneNumber"
         name="phone" type="number" onChange={this.handleChange} 
         className="five">
         </input>
        <input value={this.state.favoriteFood} 
        name="favoriteFood" onChange={this.handleChange} 
        placeholder="favoriteFood"
        className="six">
        </input>
        <textarea
        name="textBox"
        placeholder="tell us about yourself" onChange={this.handleChange}
        className="textarea"
        />
        </div>
        <button type="submit" className="button">submit</button>
        </form>
        {mappedbadges}
      </>
    )
  }
}
