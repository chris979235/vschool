import React from "react";
function Pet(props) {
  return (
    <div>
      <p>
        breed: {props.breed} - {props.petname}
      </p>
    </div>
  );
}
export default Pet;
