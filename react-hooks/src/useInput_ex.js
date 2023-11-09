import React, { useState } from "react";
import ReactDom from "react-dom";
import "./styles.css";

function useInput(initialVal, validator) {
  const [value, setValue] = useState(initialVal);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}

function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
