import React, { Component } from "react";
import MakeABox from "./MakeABox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: ["green", "red", "blue", "yellow"]
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    console.log(this.state.colors);
    this.setState(prevState => {
      if (prevState.colors[0] === "green") {
        console.log(prevState);
        return {
          colors: ["white", "white", "white", "white"]
        };
      } else {
        return {
          colors: ["black", "red", "black", "red"]
        };
      }
    });
  }

  render() {
    const squares = this.state.colors.map(function(newcolor) {
      return <MakeABox color={newcolor} />;
    });
    const style = {
      color: this.state.colors,
      width: "200px",
      height: "200px"
    };
    return (
      <div style={style} className="box">
        {squares}
        <button onClick={this.clicker}></button>
      </div>
    );
  }
}
