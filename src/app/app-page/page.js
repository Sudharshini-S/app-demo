"use client";

import { useState } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim() === "") return;

    setNotes([...notes, note]);
    setNote("");
  };

  const removeNote = (indexToRemove) => {
    setNotes(notes.filter((_, index) => index !== indexToRemove));
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Quick Notes</h1>

      <textarea
        rows="4"
        cols="40"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addNote}>Save Note</button>

      <h2>Saved Notes</h2>

      {notes.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <p>{item}</p>
          <button onClick={() => removeNote(index)}>
            Delete Note
          </button>
        </div>
      ))}
    </main>
  );
}