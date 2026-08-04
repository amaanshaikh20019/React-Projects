import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [note, setNote] = useState(""); //current input value
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //1----------add note-------------

  function addNote() {
    if (note.trim() === "") {
      return;
    }

    if (editId !== null) {
      const updatedNotes = notes.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            title: note,
          };
        }

        return item;
      });

      setNotes(updatedNotes);
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title: note,
      };

      setNotes([...notes, newNote]);
    }

    setNote("");
  }

  //-----------------delete=-------------------

  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(updatedNotes);
  }

  //--------------edit------------------------

  function editNote(id) {
    const selectedNote = notes.find((note) => {
      return note.id === id;
    });

    setNote(selectedNote.title);

    setEditId(id);
  }

  return (
    <div>
      <h1>Notes App</h1>

      <input
        type="text"
        placeholder="Enter Note"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
      />

      <button onClick={addNote}>Add Note</button>

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>

          <button onClick={() => editNote(note.id)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
