import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);

    setTask("");
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((item, index) => {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {tasks.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>

          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
