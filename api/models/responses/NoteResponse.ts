// src/responses/noteResponses.ts
export interface NoteResponse {
  id: number;
  title: string;
  content: string;
}

export interface DeleteNoteResponse {
  message: string;
}
