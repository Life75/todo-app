// src/services/noteService.ts
import { NoteRepository } from '../repositories/NoteRepository';
import { CreateNoteRequest, UpdateNoteRequest } from '../models/requests/NoteRequest';
import { NoteResponse } from '../models/responses/NoteResponse';

export class NoteService {
  constructor(private noteRepo: NoteRepository) {}

  /** Get all notes */
  getAllNotes(): NoteResponse[] {
    return this.noteRepo.getAll();
  }

  /** Get a single note by ID */
  getNoteById(id: number): NoteResponse | null {
    return this.noteRepo.getById(id) || null;
  }

  /** Create a new note */
  createNote(data: CreateNoteRequest): NoteResponse {
    if (!data.title) {
      throw new Error('Title is required');
    }

    // Omit is already applied in repository: repo expects {title, content}, no id
    return this.noteRepo.create(data);
  }

  /** Update an existing note */
  updateNote(id: number, data: UpdateNoteRequest): NoteResponse | null {
    // Partial<Omit<NoteResponse, 'id'>> ensures 'id' is never updated and fields are optional
    return this.noteRepo.update(id, data);
  }

  /** Delete a note */
  deleteNote(id: number): boolean {
    return this.noteRepo.delete(id);
  }
}
