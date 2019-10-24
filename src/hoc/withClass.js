import React from "react";

const  withClass = (WrappedComponent, classname) =>{
  return props => (
    <div className={classname}>
      <WrappedComponent />
    </div>
  );
}

export default withClass;
