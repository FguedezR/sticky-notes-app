export function Note({ note, onDelete }) {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <p className="note-text">{note.text}</p>
      <button
        className="note-delete"
        onClick={() => onDelete(note.id)}
        aria-label="Eliminar nota"
      >
        ✕
      </button>
    </div>
  );
}