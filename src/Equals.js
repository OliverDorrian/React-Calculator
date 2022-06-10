import { useState } from "react";



function Equals(props) {
  
    const [keyStrokeVal, setKeyVal] = useState(props.keyValue);

    return (
      <div
        className="key-button-wide"
        onClick={(event) => props.onClick(keyStrokeVal)}
      >
        <div className="key-styling-wide">
          <p>{ keyStrokeVal}</p>
        </div>
      </div>
    );
  }

export default Equals;