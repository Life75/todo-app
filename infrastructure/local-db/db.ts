import NoteEntity from '@/features/notes/models/dtos/NoteEntity';
import WorkspaceEntity from '@/features/workspace/models/dtos/WorkspaceEntity';
import Dexie, { Table } from 'dexie';

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

