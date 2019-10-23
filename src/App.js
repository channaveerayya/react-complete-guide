// import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import React, { Component } from "react";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Channu", age: 25 },
      { id: 2, name: "Dinesh", age: 25 }
    ],
    showPerson: false,
    otherState: "other state value"
  };

  TogglePersons = () => {
    this.setState({ showPerson: !this.state.showPerson });
  };

  deletePerson = indexId => {
    const persons = [...this.state.persons];
    persons.splice(indexId, 1);
    this.setState({ persons: persons });
  };

  inputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello App Component</h1>
        <button onClick={this.TogglePersons}>Toggle Persons</button>
        {this.state.showPerson
          ? this.state.persons.map((person, index) => (
              <Person
                key={index}
                clickRef={() => this.deletePerson(index)}
                name={person.name}
                age={person.age}
                change={event => this.inputHandler(event, person.id)}
              />
            ))
          : null}
      </div>
    );
  }
}
export default App;
