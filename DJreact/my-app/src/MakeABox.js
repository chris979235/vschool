import React from "react";

export default function MakeABox(props) {
  const style = {
    backgroundColor: props.color,
    width: "200px",
    height: "200px"
  };
  return <div style={style}>{props.color}</div>;
}
