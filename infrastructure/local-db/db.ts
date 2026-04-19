import Dexie, { Table } from 'dexie';

export interface WorkspaceEntity {
  id?: string; // Dexie can auto-gen or you can use UUIDs
  name: string;
  icon: string;
  synced: number; // 0 for unsynced, 1 for synced
  updatedAt: number;
}

export interface NoteEntity {
  id?: string;        // UUID recommended
  workspaceId: string; // Foreign Key
  title: string;
  content: string;
  synced: number;     // 0 = pending, 1 = saved to cloud
  updatedAt: number;
}

export class AppDatabase extends Dexie {
  workspaces!: Table<WorkspaceEntity>;
  notes!: Table<NoteEntity>;

  constructor() {
    super('NotesAppDB');
    this.version(1).stores({
      workspaces: '++id, name, synced, updatedAt',
      // We index workspaceId to allow: db.notes.where({ workspaceId: '...' })
      notes: '++id, workspaceId, title, synced, updatedAt' 
    });
  }
}

export const db = new AppDatabase();