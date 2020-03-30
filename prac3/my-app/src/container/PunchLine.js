import React from "react";

function PunchLine(props) {
  console.log(props);
  return (
    <div>
      <p> Question: {props.Q}</p>
      <p> Answer: {props.punch}</p>
    </div>
  );
}

export default PunchLine;
