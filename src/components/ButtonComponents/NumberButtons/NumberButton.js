import React from "react";

const NumberButton = (props) => {
  return (
    <div className='numbersChild'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button
        className='numbersButton'
        onClick={() => props.addNumber(props.button)}
      >
        {props.button}
      </button>

    </div>
  );
};

export default NumberButton;