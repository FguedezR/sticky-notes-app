import { ColorProvider } from "./context/ColorContext";
import { ColorSelector } from "./components/ColorSelector";
import { NoteBoard } from "./components/NoteBoard";
import "./App.css";

export default function App() {
  return (
    <ColorProvider>
      <div className="app">
        <header className="app-header">
          <h1>📌 Notas Adhesivas</h1>
          <ColorSelector />
        </header>
        <main>
          <NoteBoard />
        </main>
      </div>
    </ColorProvider>
  );
}
