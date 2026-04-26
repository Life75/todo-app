"use client";

type NoteListItem = {
  id: string;
  workspaceId: string;
  title: string;
  preview: string;
  updatedAt: string;
};

type NotesListProps = {
  workspaceId: string;
  selectedNoteId?: string;
  onSelectNote: (note: NoteListItem) => void;
};

function useNotesListVM(workspaceId: string) {
  const allNotes: NoteListItem[] = [
    {
      id: "n-1",
      workspaceId: "1",
      title: "Daily Standup Notes",
      preview: "Quick follow-ups for the team and blockers to clear next.",
      updatedAt: "Today, 9:12 AM",
    },
    {
      id: "n-2",
      workspaceId: "1",
      title: "Landing Page Ideas",
      preview: "Hero direction, value props, and rough CTA experiments.",
      updatedAt: "Yesterday, 4:48 PM",
    },
    {
      id: "n-3",
      workspaceId: "2",
      title: "Sprint Retro",
      preview: "Wins, pain points, and action items for the next cycle.",
      updatedAt: "Today, 11:03 AM",
    },
    {
      id: "n-4",
      workspaceId: "2",
      title: "Research Snippets",
      preview: "Collected findings, links, and small product observations.",
      updatedAt: "Friday, 2:17 PM",
    },
    {
      id: "n-5",
      workspaceId: "3",
      title: "Personal Brain Dump",
      preview: "Loose thoughts, reminders, and a few half-formed ideas.",
      updatedAt: "Thursday, 8:05 PM",
    },
  ];

  return allNotes.filter((note) => note.workspaceId === workspaceId);
}

export default function NotesList({
  workspaceId,
  selectedNoteId,
  onSelectNote,
}: NotesListProps) {
  const notes = useNotesListVM(workspaceId);

  if (notes.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-4 text-sm text-foreground/60">
        No notes yet for this workspace.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {notes.map((note) => {
        const isSelected = note.id === selectedNoteId;

        return (
          <button
            key={note.id}
            type="button"
            onClick={() => onSelectNote(note)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
              isSelected
                ? "border-foreground/20 bg-foreground/10"
                : "border-transparent bg-muted/40 hover:bg-muted"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium">{note.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-foreground/65">
                  {note.preview}
                </p>
              </div>
              <span className="shrink-0 text-xs text-foreground/50">
                {note.updatedAt}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export type { NoteListItem };
