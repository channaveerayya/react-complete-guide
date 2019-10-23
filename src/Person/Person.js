import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>Person functional component</p>
            <h1>name={props.name} age={props.age}</h1>
        </div>
    )
}

export default Person
