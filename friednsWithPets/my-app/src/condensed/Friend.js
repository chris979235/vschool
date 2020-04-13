import React from "react";
import Pet from "./Pet";
function Friend(props) {
  const mappedpets = props.pets.map(function(newarr) {
    return <Pet breed={newarr.breed} petname={newarr.name} />;
  });
  return (
    <div>
      <p>{props.friendname}</p>
      <p>{props.age}</p>
      {mappedpets}
    </div>
  );
}

export default Friend;
