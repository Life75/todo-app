import { useNotesListVM } from "@/components/notes_list/NotesList"
import NoteContentArea from "@/features/notes/ui/NoteContentArea"
import NoteView from "@/features/notes/ui/NoteView"

type NotePageProps = {
    params: Promise<{
        workspaceId: string
        noteId: string
    }>
}
export default async function NotePage({ params }: NotePageProps) {
    const { noteId, workspaceId } = await params

    return <NoteView noteId={noteId} workspaceId={workspaceId}/>
}