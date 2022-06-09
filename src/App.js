import React, { useState} from "react";
import Key from "./Key"
import Title from "./Title";
import CurVal from "./CurVal";
import Equals from "./Equals";
import './button.css';

function App() {

  const [currentValue, setCurrentValue] = useState("0");


  const addValue = passedString => { 
    setCurrentValue((currentValue.concat(passedString)));
  }

  return (
    <div className="App">
      <Title/>
      <div id="calculator-container">
        <CurVal passedString={currentValue}/>
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
              <Key className="button" keyValue={3} addValue={addValue}/>
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
                <Key className="button" keyValue={"CLR"} />  
                <Key className="button" keyValue={"+"} />  
                <Key className="button" keyValue={"-"} />  
                <Key className="button" keyValue={"x"} />  
              </div>
          </div>
      
        </div>
        <div id="bottom-row">
            <div className="button-contain">
              <Equals />
            </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
