import { AppDatabase } from "@/infrastructure/local-db/db";
import NoteContentEntity from "../models/dtos/NoteContentEntity";
import NoteEntity from "../models/dtos/NoteEntity";

export class LocalNoteDataSource {
    private db: AppDatabase

    constructor(db: AppDatabase) {
        this.db = db
    }

    async createNote(note: NoteEntity): Promise<string> {
        return await this.db.notes.add(note)
    }

    async updateNote(note: NoteEntity): Promise<NoteEntity> {
        await this.db.notes.put(note)
        return { ...note }
    }

    async deleteNote(id: string): Promise<void> {
        return await this.db.notes.delete(id)
    }

    async getAllNotes(workspaceId: string): Promise<NoteEntity[]> {
        return await this.db.notes.where("workspaceId").equals(workspaceId).toArray()
    }

    async getNote(id: string): Promise<NoteEntity | undefined> {
        return await this.db.notes.get(id)
    }

    async createNoteContent(noteContent: NoteContentEntity): Promise<string> {
        return await this.db.noteContents.add(noteContent)
    }

    async updateNoteContent(noteContent: NoteContentEntity): Promise<NoteContentEntity> {
        await this.db.noteContents.put(noteContent)
        return { ...noteContent }
    }

    async deleteNoteContent(noteId: string): Promise<void> {
        await this.db.noteContents.where("noteId").equals(noteId).delete()
    }

    async getNoteContent(noteId: string): Promise<NoteContentEntity | undefined> {
        return await this.db.noteContents.where("noteId").equals(noteId).first()
    }
}
