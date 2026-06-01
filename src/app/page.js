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
      <h1>📝 Notes</h1>

      <div className="input-section">
        <textarea
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button className="add-btn" onClick={addNote}>
          + Add
        </button>
      </div>

      <h2 className="saved-title">Saved Notes</h2>

      {notes.length === 0 ? (
        <p className="empty-message">
          No notes available.
        </p>
      ) : (
        notes.map((item, index) => (
          <div className="note-card" key={index}>
            <span>{item}</span>

            <button
              className="delete-btn"
              onClick={() => removeNote(index)}
            >
              🗑
            </button>
          </div>
        ))
      )}
    </main>
  );
}