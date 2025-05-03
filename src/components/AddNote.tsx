import { useRef, useState } from "react";
import { useNotesStore } from "../store/notes-store";

export function AddNote() {
  const [newNote, setNewNote] = useState('');
  const addNote = useNotesStore(state => state.addNote);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    addNote(newNote);
    setNewNote('')
    inputRef.current?.focus()
  }

  return (
    <div className="relative">
      <div className="flex bg-slate-700 p-3 items-center w-full gap-2 rounded-t-xl">
        <input className="p-1 px-2 shadow-inner bg-slate-800 text-slate-300 rounded-md w-full" type="text" value={newNote} ref={inputRef} onChange={(e) => setNewNote(e.target.value)} />
        <button className="px-2 py-1 bg-slate-900 text-blue-600 rounded-md" onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}