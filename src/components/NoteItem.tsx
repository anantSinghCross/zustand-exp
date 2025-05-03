import { useNotesStore } from "../store/notes-store"

export function NoteItem({ note }: { note: string }) {
  const removeNote = useNotesStore(state => state.removeNote)
  return (
    <div className="group flex justify-between p-2 mx-2 shadow-md rounded-md bg-slate-800 text-slate-400">
      <div>
        {note}
      </div>
      <button className="self-start text-red-700 opacity-0 group-hover:opacity-100 transition-all" onClick={() => removeNote(note)}>Delete</button>
    </div>
  )
}