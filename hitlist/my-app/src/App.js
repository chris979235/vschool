import React, { Component } from 'react'
import axios from "axios"
import Person from "./Person.js"
export default class App extends Component {
  constructor(){
    super()
    this.state={
      hitList: []
    }
  }

  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
    .then( response => {
      console.log(response.data)
      this.setState({
        hitList:response.data
      })
    }).catch(error => console.log(error))
  }


  render() {
    const mappedData=this.state.hitList.map(function(person){
      return <Person
      name={person.name}
      image={person.image}
      />
    })
    return (
      <div>
        {mappedData}
      </div>
    )
  }
}
