import React from "react";
import Friend from "./condensed/Friend";
import Pet from "./condensed/Pet";
import OverAllObject from "./condensed/OverAllObject";
import "./style.css";
function FriendListApp() {
  const friends = OverAllObject.map(function(newarr) {
    return (
      <Friend friendname={newarr.name} age={newarr.age} pets={newarr.pets} />
    );
  });

  return <div className="box">{friends}</div>;
}

export default FriendListApp;
