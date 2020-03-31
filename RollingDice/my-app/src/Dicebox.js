import React from "react";

export default function Dicebox(props) {
  const style = {
    width: "200px",
    height: "200px"
  };
  return <div style={style}> {props.number}</div>;
}
