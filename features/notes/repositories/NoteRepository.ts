import { BaseRepository } from "@/infrastructure/BaseRepository";
import CreateNoteRequest from "../models/requests/CreateNoteRequest";
import { LocalNoteDataSource } from "./LocalNoteDataSource";
import { db } from "@/infrastructure/local-db/db";
import NoteEntity from "../models/dtos/NoteEntity";
import UpdateNoteRequest from "../models/requests/UpdateNoteRequest";
import GetAllNotesRequest from "../models/requests/GetAllNotesRequest";
import GetAllNotesResponse from "../models/responses/GetAllNotesResponse";
import { fail, ok, Result } from "@/models/types/Result";
import { ErrorType } from "@/models/types/ErrorTypes";
import CreateNoteResponse from "../models/responses/CreateNoteResponse";

export default class NoteRepository extends BaseRepository {
        //Need to save this via API client and LocalDB 
        //look into implementing a subscription approach 
        private local: LocalNoteDataSource = new LocalNoteDataSource(db)
        //need to make this with DB injection 

        async createNote(request: CreateNoteRequest): Promise<Result<CreateNoteResponse>> {
                try {
                        const newEntry: NoteEntity = {  
                            workspaceId: request.workspaceId, 
                            title: request.title,
                            content: request.content,
                            synced: 0, 
                            updatedAt: Date.now()
                        }

                        const id = await this.local.create(newEntry)
                        const note: CreateNoteResponse = {
                                id: id.toString(),
                                workspaceId: newEntry.workspaceId,
                                title: newEntry.title,
                                content: newEntry.content, 
                                updatedAt: newEntry.updatedAt
                        } 

                        return ok(note)
                } catch(e) {
                            return fail(
                              ErrorType.DATABASE_ERROR,
                              "Unable to get workspaces"
                            );  
                }
        }
        
        updateNote(request: UpdateNoteRequest) {

        }


        async getAllNotes(request: GetAllNotesRequest): Promise<GetAllNotesResponse> {
             try {
                const data = await this.local.getAll()

             }  catch(e) {

             } 
        }



        /*
            ViewModel subscribes once
                    ↓
            Repository emits cached Dexie notes
                    ↓
            Repository fetches API
                    ↓
            Repository saves API notes to Dexie
                    ↓
            Dexie automatically emits updated notes
    
        */
}