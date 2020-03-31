import React, { Component } from "react";
import Dicebox from "./Dicebox";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6]
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState(
      function(prevState) {
        return {
          numbers: prevState.numbers.map(function(number) {
            return Math.floor(Math.random() * 6) + 1;
          })
        };
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        <span className="span">{this.state.numbers[0]}</span>
        <span className="span">{this.state.numbers[1]}</span>
        <span className="span">{this.state.numbers[2]}</span>
        <span className="span">{this.state.numbers[3]}</span>
        <span className="span">{this.state.numbers[4]}</span>
        <span className="span">{this.state.numbers[5]}</span>
        <button onClick={this.clicked}>Roll Dice</button>
      </div>
    );
  }
}
