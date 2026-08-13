import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import NoteRepository from "../repositories/NoteRepository";
import NoteResponse from "../models/responses/NoteResponse";

export default function useNotesListVM(workspaceId: string) {
    //we'll need to fetch our notes from a given service/repository
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = useState<NoteResponse[]>([])
    
    useEffect(() => {
        
        async function fetchNotes() {
            setIsLoading(true)

            const service = new NotesService(new NoteRepository())
            const result = await service.getAllNotes({workspaceId})

            if (result.success) {
                setNotes(result.data.notes)
            }

            setIsLoading(false)
        }
        
        fetchNotes()
        
    }, [workspaceId])

    //for now we focus on get, which will need to be paginated 
    //update for updating the current notes (we'll create some mock ones within the DB to fetch)
    //we'll first render and return the DB notes, procceed with an API call in the background to update our DB with whatever is in the API and reflect upon it in the upper layers. 

    return {
        notes, 
        isLoading
    }
}