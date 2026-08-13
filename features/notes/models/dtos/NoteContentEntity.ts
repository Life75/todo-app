export default interface NoteContentEntity {
  id?: string
  noteId: string
  content: string
  synced: number
  updatedAt: number
}
