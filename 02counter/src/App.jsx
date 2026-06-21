import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <button onClick={removeValue}>Decrease value{counter}</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
