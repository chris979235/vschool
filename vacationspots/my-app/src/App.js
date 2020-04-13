import React from "react";
import Vacation from "./component/Vacation";
import CondensedVaca from "./component/CondensedVaca";
import "./style.css";
function App() {
  const vacation = Vacation.map(function(newarr) {
    return (
      <CondensedVaca
        place={newarr.place}
        cost={newarr.price}
        time={newarr.timeToGo}
      />
    );
  });
  return <div>{vacation}</div>;
}
export default App;
