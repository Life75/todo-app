import { NoteEntity } from "@/infrastructure/local-db/db";

export default interface GetAllNotesResponse {
    entity: NoteEntity[]
}