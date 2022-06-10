import { useEffect, useState } from "react";

function CurVal(props) {
  const [val, setVal] = useState(props.passedString);
  
  useEffect(() => setVal(props.passedString));
  
  return (
    <div id="top-keypad">
      <p id="current-number">{val}</p>
    </div>
  )
}

export default CurVal;