import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

function App() {
  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);

  function sayhello() {
    console.log("hello");
  }

  useEffect(sayhello, []);

  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber + 1)}>{anumber}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
