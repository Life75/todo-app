import { BaseRepository } from "@/infrastructure/BaseRepository";
import CreateNoteRequest from "../models/requests/CreateNoteRequest";
import { LocalNoteDataSource } from "./LocalNoteDataSource";
import { db } from "@/infrastructure/local-db/db";
import UpdateNoteRequest from "../models/requests/UpdateNoteRequest";
import GetAllNotesRequest from "../models/requests/GetAllNotesRequest";
import GetAllNotesResponse from "../models/responses/GetAllNotesResponse";

export default class NoteRepository extends BaseRepository {
        //Need to save this via API client and LocalDB 
        //look into implementing a subscription approach 
        private local: LocalNoteDataSource = new LocalNoteDataSource(db)
        //need to make this with DB injection 

        createNote(request: CreateNoteRequest) {

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