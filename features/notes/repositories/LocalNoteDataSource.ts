import { AppDatabase } from "@/infrastructure/local-db/db";
import DataSource from "@/infrastructure/models/DataSource";
import NoteEntity from "../models/dtos/NoteEntity";
//NEED TO CREATE SHARED INTERFACE 
export class LocalNoteDataSource implements DataSource<NoteEntity> {
    private db: AppDatabase

    constructor(db: AppDatabase) {
        this.db = db 
    }

    async create(note: NoteEntity): Promise<string> {
        return await this.db.notes.add(note)
    }

    async update(note: NoteEntity): Promise<NoteEntity> {
        await this.db.notes.put(note)
        return {...note}
    }

    async getAll(): Promise<NoteEntity[]> {
        return await this.db.notes.toArray()
    }

}