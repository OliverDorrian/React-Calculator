import React, { useState} from "react";
import Key from "./Key"
import Title from "./Title";
import CurVal from "./CurVal";
import Equals from "./Equals";
import './button.css';

function App() {

  const [currentValue, setCurrentValue] = useState("0");


  const addValue = passedString => { 

    if (passedString == "CLR") {
      setCurrentValue("0");
      return;
    }
    setCurrentValue((currentValue.concat(passedString)));
  }

  return (
    <div className="App">
      <Title />
      <div id="calculator-container">
        <CurVal passedString={currentValue} />
        <div id="keypad-left-right">
          <div id="left-keypad">
            <div className="button-contain">
              <Key
                className="button"
                keyValue={7}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={8}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={9}
                onClick={(value) => addValue(value)}
              />
            </div>
            <div className="button-contain">
              <Key
                className="button"
                keyValue={6}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={5}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={4}
                onClick={(value) => addValue(value)}
              />
            </div>
            <div className="button-contain">
              <Key
                className="button"
                keyValue={3}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={2}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={1}
                onClick={(value) => addValue(value)}
              />
            </div>
            <div className="button-contain">
              <Key
                className="button"
                keyValue={0}
                onClick={(value) => addValue(value)}
              />
              <Key className="button" keyValue={"."} />
              <Key className="button" keyValue={"/"} />
            </div>
          </div>
          <div id="right-keypad">
            <div className="button-contain-col">
              <Key
                className="button"
                keyValue={"CLR"}
                onClick={(value) => addValue(value)}
              />
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
