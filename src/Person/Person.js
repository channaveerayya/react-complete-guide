import React from 'react'
import './Person.css'
const Person = (props) => {
    const inlineStyle = {
      backgroundColor: "red",
      border: "1px solid blue",
      padding: "8px",
      color: "white",
      cursor: " pointer"
    };
    return (
        <div className="Person">
            <p>Person functional component</p>
            <button onClick={props.clickRef} style={inlineStyle}> click </button>
            <h1>name={props.name} age={props.age}</h1>
            <input type="text" onChange={props.change} defaultValue={props.name}/>
        </div>
    )
}

export default Person
