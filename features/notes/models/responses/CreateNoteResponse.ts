export default interface CreateNoteResponse {
    id: string, 
    workspaceId: string, 
    title: string,
    content: string,
    updatedAt: number
}