import React from "react";

function Todo(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>{props.question}</p>
      <h3>{props.answer}</h3>
    </div>
  );
}
export default Todo;
