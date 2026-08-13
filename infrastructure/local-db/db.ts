import NoteEntity from '@/features/notes/models/dtos/NoteEntity';
import NoteContentEntity from '@/features/notes/models/dtos/NoteContentEntity';
import WorkspaceEntity from '@/features/workspace/models/dtos/WorkspaceEntity';
import Dexie, { Table } from 'dexie';

export class AppDatabase extends Dexie {
  workspaces!: Table<WorkspaceEntity>;
  notes!: Table<NoteEntity>;
  noteContents!: Table<NoteContentEntity>;

  constructor() {
    super('NotesAppDB');
    this.version(1).stores({
      workspaces: '++id, name, synced, updatedAt',
      // We index workspaceId to allow: db.notes.where({ workspaceId: '...' })
      notes: '++id, workspaceId, title, synced, updatedAt' 
    });

    this.version(2).stores({
      workspaces: '++id, name, synced, updatedAt',
      notes: '++id, workspaceId, title, synced, updatedAt',
      noteContents: '++id, noteId, synced, updatedAt'
    }).upgrade(async (tx) => {
      const notes = await tx.table('notes').toArray();
      await Promise.all(notes
        .filter((note) => note.id && typeof note.content === 'string')
        .map((note) => tx.table('noteContents').add({
          noteId: note.id.toString(),
          content: note.content,
          synced: note.synced ?? 0,
          updatedAt: note.updatedAt ?? Date.now()
        })));
    });
  }
}

export const db = new AppDatabase();

