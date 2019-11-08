import React from "react";

const OperatorButton = (props) => {
  return (
    <div className='operatorsChild'>

      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className='operatorButtons' onClick={ () => props.addOperator(props.button.char)}>
        {props.button.char}
      </button>

    </div>
  );
};

export default OperatorButton;
