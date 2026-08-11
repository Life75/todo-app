"use client";

import { useEffect, useState } from "react";
import NotesList, { type NoteListItem } from "@/components/notes_list/NotesList";
import { useWorkspacesQuery } from "@/features/workspace/queries/WorkspaceQueries";
import NoteContentArea from "@/features/notes/ui/NoteContentArea";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type WorkspacePageClientProps = {
  workspaceId: string;
};

export default function WorkspacePageClient({
  workspaceId,
}: WorkspacePageClientProps) {
  const { data: workspaceItems = [], isLoading } = useWorkspacesQuery();
  
  const [selectedNote, setSelectedNote] = useState<NoteListItem | null>(null);
  const workspace = workspaceItems.find(
    (item) => String(item.id) === workspaceId
  );
  const isMobile = useIsMobile()
  const router = useRouter()
  function onNoteSelectionAction(note: NoteListItem) {
    if (isMobile) {
      router.push(`/workspace/${workspaceId}/note/${note.id}`)
    }
    else {
      setSelectedNote(note)
    }
    //  if(isMobile)
  }
  useEffect(() => {
    setSelectedNote(null);
  }, [workspaceId]);

  if (isLoading) {
    return (
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
          Workspace
        </p>
        <h1 className="text-3xl font-semibold">Loading...</h1>
      </section>
    );
  }

  if (!workspace) {
    return (
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
          Workspace
        </p>
        <h1 className="text-3xl font-semibold">Workspace not found</h1>
        <p className="text-foreground/70">
          No workspace exists for id {workspaceId}.
        </p>
      </section>
    );
  }

  function onNewNoteClick() {

  }

  return (
    <section className="flex h-full min-h-[calc(100vh-10rem)] overflow-hidden rounded-2xl border bg-background">
      <aside className="flex w-full max-w-sm shrink-0 flex-col border-r bg-muted/20">
        <div className="border-b px-5 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                Workspace
              </p>

              <h1 className="mt-2 truncate text-2xl font-semibold">
                {workspace.name}
              </h1>

              <p className="mt-1 text-sm text-foreground/65">
                Notes preview list
              </p>
            </div>

            <Button
              size="sm"
              variant="outline"
              className="mt-6 shrink-0 bg-background px-3 text-xs font-medium"
              onClick={() => onNewNoteClick()}
            >
              + New note
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <NotesList
            workspaceId={workspaceId}
            selectedNoteId={selectedNote?.id}
            onSelectNote={onNoteSelectionAction}
          />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b px-6 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            Note Content
          </p>

          <h2 className="mt-2 truncate text-xl font-semibold">
            {selectedNote ? selectedNote.title : "Select a note"}
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {selectedNote ? (
            <NoteContentArea note={selectedNote} />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="w-full max-w-md rounded-2xl border border-dashed px-8 py-10 text-center">
                <h3 className="text-lg font-medium">Choose a note</h3>

                <p className="mt-2 text-sm text-foreground/60">
                  Pick a note from the inner sidebar to preview it here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
