import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [initState, changedState] = useState({
    persons: [{ name: "Channu", age: 25 }, { name: "Dinesh", age: 25 }],
    otherState: "other state value"
  });

  console.log(initState);
  
  const switchNameHandler = () => {
    changedState({
      ...initState,
      persons: [{ name: "Channu BS", age: 25 }, { name: "Dinesh PN", age: 25 }]
    });
  };

  return (
    <div className="App">
      <h1>Hello App Component</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={initState.persons[0].name} age={initState.persons[0].age} />
      <Person name={initState.persons[1].name} age={initState.persons[1].age} />
    </div>
  );
};

export default App;
