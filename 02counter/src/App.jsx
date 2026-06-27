import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const Reduce = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={addValue}>Add Value:{counter}</button>
      <button onClick={Reduce}>Reduce Value:{counter}</button>
      <button>Current Value:{counter}</button>
    </>
  );
}

export default App;
