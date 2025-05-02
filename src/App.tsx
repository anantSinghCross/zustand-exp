import { AddNote } from "./components/AddNote"
import { NoteItem } from "./components/NoteItem"
import { useNotesStore } from "./store/notes-store"

function App() {
  const notes = useNotesStore(state => state.notes)
  
  return (
    <div className="flex flex-col justify-between bg-slate-900 h-svh w-full">
      <div className="flex justify-between p-3 bg-slate-800">
        <h1 className="font-semibold text-xl text-slate-500">Notes.ly</h1>
        <div className="flex gap-2">
          <button className="px-2 py-1 text-sm shadow-md rounded-md bg-blue-900 text-slate-400 cursor-pointer">Fetch Notes</button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {
            notes.map(item => <NoteItem key={item} note={item}/>)
          }
        </div>
        <AddNote/>
      </div>
    </div>
  )
}

export default App
