import { NoteListItem } from "@/components/notes_list/NotesList";

type NoteContentAreaProps = {
    note: NoteListItem
}

export default function NoteContentArea({ note }: NoteContentAreaProps) {

    return (
        <div className="space-y-4">
            <p className="text-sm text-foreground/55">
                Last updated: {note.updatedAt}
            </p>
            <div className="rounded-2xl border bg-card p-6">
                <p className="leading-7 text-foreground/80">
                    {note.preview}
                </p>
                <p className="mt-4 leading-7 text-foreground/65">
                    This is the note content pane. Later you can swap this dummy
                    content for your editor component and load the full note body
                    from your real viewmodel.
                </p>
            </div>
        </div>
    )
}