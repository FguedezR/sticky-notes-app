import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MAX_NOTES = 10;
const STORAGE_KEY = "sticky-notes";

function loadNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function useNotes() {
  const [notes, setNotes] = useState(loadNotes);

  function addNote(text, color) {
    if (!text.trim()) return { error: "empty" };
    if (notes.length >= MAX_NOTES) return { error: "max" };

    const newNote = { id: uuidv4(), text, color };
    const updated = [newNote, ...notes];
    setNotes(updated);
    saveNotes(updated);
    return { error: null };
  }

  function deleteNote(id) {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
    saveNotes(updated);
  }

  return { notes, addNote, deleteNote };
}
