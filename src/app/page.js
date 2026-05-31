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
    <main>
      <h1>📝 Quick Notes</h1>

      <textarea
        rows="4"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Save Note</button>

      <h2>Saved Notes</h2>

      {notes.length === 0 ? (
        <p className="empty-message">No notes added yet.</p>
      ) : (
        notes.map((item, index) => (
          <div className="note-card" key={index}>
            <p>{item}</p>

            <button
              className="delete-btn"
              onClick={() => removeNote(index)}
            >
              Delete Note
            </button>
          </div>
        ))
      )}
    </main>
  );
}