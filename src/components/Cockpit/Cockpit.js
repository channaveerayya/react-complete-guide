import React, { useEffect, useRef } from 'react';
import "./Cockpit.css"

const Cockpit = props => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    return () => {

    }
  }, []);

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p>This is really working!</p>
      <button
        ref={toggleBtnRef}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;