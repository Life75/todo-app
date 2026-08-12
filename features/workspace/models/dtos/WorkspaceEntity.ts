export default interface WorkspaceEntity {
  id?: string; // Dexie can auto-gen or you can use UUIDs
  name: string;
  icon: string;
  synced: number; // 0 for unsynced, 1 for synced
  updatedAt: number;
}