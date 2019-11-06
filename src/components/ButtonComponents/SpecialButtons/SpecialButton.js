import React from "react";

const SpecialButton = (props) => {
  return (
    <div className='specialsChild'>

      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className ='specialButtons'>
        {props.button}
      </button>

    </div>
  );
};

export default SpecialButton;