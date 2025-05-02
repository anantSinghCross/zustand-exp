import { useNotesStore } from "../store/notes-store"

export function NoteItem({ note }: { note: string }) {
  const removeNote = useNotesStore(state => state.removeNote)
  return (
    <div className="flex justify-between p-2 mx-2 shadow-md rounded-md bg-slate-800 text-slate-400">
      <div>
        {note}
      </div>
      <button className="s self-start" onClick={() => removeNote(note)}>Delete</button>
    </div>
  )
}