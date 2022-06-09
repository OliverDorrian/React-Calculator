import { useState } from "react";

function Key(props){

    const [keyStrokeVal, setKeyVal] = useState(props.keyValue);
  
    return(
      <div className="key-button" onClick={event => props.onClick(keyStrokeVal)}>
        <div className="key-styling">
          <p>{keyStrokeVal}</p>
        </div>
      </div>
    )
}

export default Key;