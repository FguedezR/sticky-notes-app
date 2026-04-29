import { useState } from "react";
import { useColor } from "../context/ColorContext";
import { useNotes } from "../hooks/useNotes";
import { Note } from "./Note";

export function NoteBoard() {
  const { defaultColor } = useColor();
  const { notes, addNote, deleteNote } = useNotes();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleAdd() {
    const result = addNote(text, defaultColor);
    if (result.error === "empty") {
      setError("La nota no puede estar vacía.");
    } else if (result.error === "max") {
      setError("Has alcanzado el máximo de 10 notas.");
    } else {
      setText("");
      setError("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div className="board-wrapper">
      <div className="board-form">
        <input
          type="text"
          placeholder="Escribe una nota..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
          className="board-input"
        />
        <button className="board-btn" onClick={handleAdd}>
          + Añadir
        </button>
      </div>

      {error && <p className="board-error">{error}</p>}

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p className="no-notes">No hay notas todavía. ¡Añade una!</p>
        ) : (
          notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  );
}
