import React from "react";

const Display = (props) => {

  return (
    <div className="display">
      {/* Display any props data here */}

      <p> {props.displayValue} </p>

    </div>
  )
};

export default Display;