"use client";

import { useNotesListVM } from "@/components/notes_list/NotesList";
import NoteContentArea from "./NoteContentArea";

type NoteView = {
  workspaceId: string;
  noteId: string;
};

export default function NoteView({ noteId, workspaceId }: NoteView) {
  const currentNote = useNotesListVM(workspaceId).find(
    (e) => e.id == noteId
  );

  return (
    <div className="h-dvh w-full md:h-auto">
      {currentNote ? <NoteContentArea note={currentNote} /> 
        : 
        <div>No note here :D</div>  
    }
    </div>
  );
}