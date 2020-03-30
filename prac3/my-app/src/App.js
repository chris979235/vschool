import React from "react";
import PunchLine from "./container/PunchLine";
import JokesData from "./container/JokesData";

function App() {
  const jokeComponents = JokesData.map(function(punchLine) {
    return (
      <PunchLine
        key={punchLine.id}
        Q={punchLine.question}
        punch={punchLine.joke}
      />
    );
  });

  return <div>{jokeComponents}</div>;
}

export default App;
