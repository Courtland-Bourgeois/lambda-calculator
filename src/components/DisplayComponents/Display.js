import React, { useState } from "react";

const Display = (props) => {

  const [displayNumbers] = useState(0);

  return (
    <div className="display">
      {/* Display any props data here */}

      <p>{displayNumbers}</p>

    </div>
  )
};

export default Display;