import NoteRepository from "../repositories/NoteRepository";

export default class NotesService {
    private repository: NoteRepository
    constructor(
        repository: NoteRepository
    ) {
        this.repository = repository
    }

    //create update delete, get, getall, 
    createNote() {
        
    }

    //needs to be a subscription so it can recieve any possible updates 
    updateNote() {

    }

    deleteNote() {

    }

    getNote() {

    }

    getAllNotes() {

    }
}