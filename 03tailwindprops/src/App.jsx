import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "amaan",
    age: 22,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="amaan" btnText="visit me" />
    </>
  );
}

export default App;
