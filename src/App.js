import React, { useState } from "react";
import './button.css';
function App() {


  return (
    <div className="App">
      <Title/>
      <div id="calculator-container">

        <CurVal />
        <div id="keypad-left-right">
          <div id="left-keypad">
            <div className="button-contain">
              <Key className="button" keyValue={7} />
              <Key className="button" keyValue={8} />
              <Key className="button" keyValue={9} />            
            </div>
            <div className="button-contain">
              <Key className="button" keyValue={6} />
              <Key className="button" keyValue={5} />
              <Key className="button" keyValue={4} />            
            </div>
            <div className="button-contain">
              <Key className="button" keyValue={3} />
              <Key className="button" keyValue={2} />
              <Key className="button" keyValue={1} />            
            </div>
            <div className="button-contain">
              <Key className="button" keyValue={0} />  
              <Key className="button" keyValue={"."} />  
              <Key className="button" keyValue={"/"} />  
            </div>
          </div>
          <div id="right-keypad">
              <div className="button-contain-col">
                <Key className="button" keyValue={"DEL"} />  
                <Key className="button" keyValue={"+"} />  
                <Key className="button" keyValue={"-"} />  
                <Key className="button" keyValue={"x"} />  
              </div>
          </div>
   
        </div>
        <div>

        </div>  
      </div>

    </div>
  );
}

function Title(){
  return (
    <div className="title">
      <h4>React Calculator</h4>
    </div>
  )
}

function CurVal(props){
  const [currentValue, setCurrentValue] = useState(0);
  
  return (
    <div id="top-keypad">
      <p id="current-number">{currentValue}</p>
    </div>
  )
}


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

export default App;
