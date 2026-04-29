import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isRunnableDevEnvironment } from "vite";

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
  
}
