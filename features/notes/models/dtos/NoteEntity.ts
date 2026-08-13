export default interface NoteEntity {
  id?: string;        // UUID recommended
  workspaceId: string; // Foreign Key
  title: string;
  synced: number;     // 0 = pending, 1 = saved to cloud
  updatedAt: number;
}
