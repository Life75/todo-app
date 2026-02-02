import fs from 'fs';
import path from 'path';
import { NoteResponse } from '../models/responses/NoteResponse';
const DATA_PATH = path.join(__dirname, '../data/notes.json');

export class NoteRepository {
  private readData(): NoteResponse[] {
    const file = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(file) as NoteResponse[];
  }

  private writeData(notes: NoteResponse[]): void {
    fs.writeFileSync(DATA_PATH, JSON.stringify(notes, null, 2));
  }

  getAll(): NoteResponse[] {
    return this.readData();
  }

  getById(id: number): NoteResponse | undefined {
    const notes = this.readData();
    return notes.find(note => note.id === id);
  }

  create(note: Omit<NoteResponse, 'id'>): NoteResponse {
    const notes = this.readData();
    const nextId = notes.length ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    const newNote: NoteResponse = { id: nextId, ...note };
    notes.push(newNote);
    this.writeData(notes);
    return newNote;
  }

  update(id: number, updatedFields: Partial<Omit<NoteResponse, 'id'>>): NoteResponse | null {
    const notes = this.readData();
    const noteIndex = notes.findIndex(n => n.id === id);
    if (noteIndex === -1) return null;

    notes[noteIndex] = { ...notes[noteIndex], ...updatedFields };
    this.writeData(notes);
    return notes[noteIndex];
  }

  delete(id: number): boolean {
    let notes = this.readData();
    const noteIndex = notes.findIndex(n => n.id === id);
    if (noteIndex === -1) return false;

    notes.splice(noteIndex, 1);
    this.writeData(notes);
    return true;
  }
}
