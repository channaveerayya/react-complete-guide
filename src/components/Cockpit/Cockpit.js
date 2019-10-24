import React from 'react';


const cockpit = (props) => {


  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p>This is really working!</p>
      <button
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;