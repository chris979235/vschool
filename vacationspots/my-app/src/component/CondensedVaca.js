import React from "react";

function CondensedVaca(props) {
  return (
    <div className="box">
      <p>{props.place}</p>
      <p>{props.cost}</p>
      <p>{props.time}</p>
    </div>
  );
}

export default CondensedVaca;
