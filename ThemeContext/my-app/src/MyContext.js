import React from "react";

const { Provider, Consumer } = React.createContext();

// Create a component that returns the provider
// Return Props children
// Everything in the value of the component enters the portal

class MyContext extends React.Component {
  state = {
    message: "Hello World",
    todos: ["Take Out Trash", "Water the Grass", "Pick Your Nose"],
  };

  handleNewTodo = () => {
    this.setState({ todos: ["go to the beach", "etc..."] });
  };

  render() {
    return (
      <Provider
        value={{
          message: this.state.message,
          todos: this.state.todos,
          handleNewTodo: this.handleNewTodo,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { MyContext, Consumer as MyConsumer };
