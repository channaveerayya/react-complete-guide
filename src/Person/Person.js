import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>Person functional component</p>
            <button onClick={props.clickRef}> click </button>
            <h1>name={props.name} age={props.age}</h1>
            <input type="text" onChange={props.change} defaultValue={props.name}/>
        </div>
    )
}

export default Person
