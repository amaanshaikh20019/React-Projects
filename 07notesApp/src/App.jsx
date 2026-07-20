import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="h-screen  bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-between items-start  p-10"
      >
        <div className="flex w-1/2 gap-4 items-start flex-col">
          <h1 className="text-3xl font-bold">Recent Notes</h1>
          <input
            type="text"
            placeholder="enter notes heading"
            className="px-5 w-full py-2 border-2 rounded "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Write details"
            className="px-5 w-full  h-32 py-2 border-2 rounded outline-none "
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className="bg-white w-full text-black px-5 py-2 rounded">
            Add Notes
          </button>
        </div>
        <img
          className="h-52"
          src="https://cdn.pixabay.com/photo/2013/07/12/15/39/sticky-note-150262_1280.png"
        ></img>
      </form>
      <div className="  p-10">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="h-52 w-40 rounded-2xl p-4 bg-gray-500">
                <h3 className="leading-tight text-xl font-bold">
                  {elem.title}
                </h3>
                <p className="mt-2 font-medium">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
