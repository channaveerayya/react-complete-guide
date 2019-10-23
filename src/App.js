import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = () => {
  const [initState, changedState] = useState({
    persons: [{ name: "Channu", age: 25 }, { name: "Dinesh", age: 25 }],
    otherState: "other state value"
  });

  console.log(initState);
  
  const switchNameHandler = (newname) => {
    changedState({
      ...initState,
      persons: [{ name: newname, age: 25 }, { name: "Dinesh PN", age: 25 }]
    });
  };

 const inputHandler = event => {
   changedState({
     ...initState,
     persons: [
       { name: event.target.value, age: 25 },
       { name: "Dinesh PN", age: 25 }
     ]
   });
 };
  return (
    <div className="App">
      <h1>Hello App Component</h1>
      <button onClick={switchNameHandler.bind(this, "hii")}>Switch Name</button>
      <Person
        clickRef={() => switchNameHandler("Joker")}
        name={initState.persons[0].name}
        age={initState.persons[0].age}
        change={inputHandler}
      />
      <Person
        clickRef={switchNameHandler.bind(this, "Abhi")}
        name={initState.persons[1].name}
        age={initState.persons[1].age}
      />
    </div>
  );
};

export default App;
