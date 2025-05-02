import { create } from "zustand";

interface NotesStore {
  notes: string[],
  addNote: (note: string) => void,
  removeNote: (noteToDelete: string) => void
}

const useNotesStore = create<NotesStore>()((set) => {
  return {
    notes: [],
    addNote: (note: string) => set((state) => ({notes: [...state.notes, note]})),
    removeNote: (noteToDelete: string) => set((state) => ({ notes: state.notes.filter((item: string) => item !== noteToDelete)}))
  }
})

export { useNotesStore }