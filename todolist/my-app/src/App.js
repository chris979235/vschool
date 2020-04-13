import React from "react";
import Todo from "./container/Todo";
function App() {
  return (
    <div className="todo-list">
      <Todo question="what is your name" answer="my name is chris" />
      <Todo question="a" answer="b" />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
