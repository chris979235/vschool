import React from "react";
import { MyConsumer } from "./MyContext";

export default function () {
  return (
    <div>
      <MyConsumer>
        {(props) => (
          <div>
            <h1>{props.message}</h1>
            {props.todos.map((todo) => (
              <h6>{todo}</h6>
            ))}
          </div>
        )}
      </MyConsumer>
    </div>
  );
}
