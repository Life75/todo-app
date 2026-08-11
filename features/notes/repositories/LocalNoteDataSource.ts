import { AppDatabase, NoteEntity } from "@/infrastructure/local-db/db";
import DataSource from "@/infrastructure/models/DataSource";
//NEED TO CREATE SHARED INTERFACE 
export class LocalNoteDataSource implements DataSource {
    private db: AppDatabase

    constructor(db: AppDatabase) {
        this.db = db 
    }

    async create(note: NoteEntity) {
        return await this.db.notes.add(note)
    }

    async update(note: NoteEntity): Promise<NoteEntity> {
        return await this.db.notes.put(note)
        return {...note}
    }

    async getAll(): Promise<NoteEntity[]> {
        return await this.db.notes.toArray()
    }

}