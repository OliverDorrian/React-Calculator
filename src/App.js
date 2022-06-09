import React, { useState} from "react";
import Key from "./Key"
import Title from "./Title";
import CurVal from "./CurVal";
import Equals from "./Equals";
import './button.css';

function App() {

  const [currentValue, setCurrentValue] = useState("0");
  const [dot, setDot] = useState(false); 
  const [add, setAdd] = useState(false);
  const [sub, setSub] = useState(false);
  const [divide, setDivide] = useState(false);
  const [times, setTimes] = useState(false);

  const addValue = passedString => {

    if (passedString === "CLR") {
      setDot(false);
      setCurrentValue("0");
      return;
    }

    if (currentValue.toString().includes(".") && passedString === ".") {
      return;
    }

    if (passedString === ".") {
      setDot(true);
      return;
    }

    if (passedString === "+") {
      setAdd(true);
      setSub(false);
      setDivide(false);
      setTimes(false);
      return;
    }

    if (passedString === "-") {
      setSub(true);
      setAdd(false);
      setDivide(false);
      setTimes(false);
      return;
    }

    if (passedString === "/") {
      setDivide(true);
      setSub(false);
      setAdd(false);
      setTimes(false);
      return;
    }

    if (passedString === "x") {
      setTimes(true);
      setSub(false);
      setDivide(false);
      setAdd(false);
      return;
    }

    if (add) {
      let num1 = parseInt(currentValue.toString());
      let num2 = parseInt(passedString.toString());
      setCurrentValue(num1 + num2);
      setAdd(false);
      return;
    }

    if (dot && passedString !== ".") {
      let tempSting = currentValue.toString();
      tempSting += ".";
      tempSting += passedString.toString();

      setCurrentValue(tempSting);
      setDot(false);
      return;
    }
    

    if (currentValue === "0") {
      setCurrentValue(passedString);
      return;    
    }

    let tempSting = currentValue.toString().concat(passedString.toString())
    setCurrentValue(tempSting);
    return;
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
              <Key
                className="button"
                keyValue={"."}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={"/"}
                onClick={(value) => addValue(value)}
              />
            </div>
          </div>
          <div id="right-keypad">
            <div className="button-contain-col">
              <Key
                className="button"
                keyValue={"CLR"}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={"+"}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={"-"}
                onClick={(value) => addValue(value)}
              />
              <Key
                className="button"
                keyValue={"x"}
                onClick={(value) => addValue(value)}
              />
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
