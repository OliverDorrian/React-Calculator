import { useState } from "react";

function Key({keyValue}){

    const [keyStrokeVal, setKeyVal] = useState(keyValue);
  
    return(
      <div className="key-button">
        <div className="key-styling">
          <p>{keyStrokeVal}</p>
        </div>
      </div>
    )
}

export default Key;