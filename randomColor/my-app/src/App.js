import React, { Component } from 'react'
import axios from "axios"
import Color from "./Color"
export default class App extends Component {
constructor(){
  super()
  this.state={
    color:""
  }
}
componentDidMount(){
axios.get("http://www.colr.org/json/color/random")
.then(response =>{
  console.log(response.data)
  this.setState({
    color:response.data.colors[0].hex
  })
}).catch(error => console.log(error))
}

  render() {
    return (
      <div>
        <Color
        colored={this.state.color}
        />
      </div>
    )
  }
}
