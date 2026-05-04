import { NoteListItem } from "@/components/notes_list/NotesList";
import SlateEditor from "@/components/ui/SlateEditor";

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
                <p className="mt-4 leading-7 text-foreground/90">
                    <SlateEditor/>
                </p>
            </div>
        </div>
    )
}