import { BaseRepository } from "@/infrastructure/BaseRepository";
import { db } from "@/infrastructure/local-db/db";
import { ErrorType } from "@/models/types/ErrorTypes";
import { fail, ok, Result } from "@/models/types/Result";
import NoteContentEntity from "../models/dtos/NoteContentEntity";
import NoteEntity from "../models/dtos/NoteEntity";
import GetAllNotesRequest from "../models/requests/GetAllNotesRequest";
import UpdateNoteContentRequest from "../models/requests/UpdateNoteContentRequest";
import UpdateNoteRequest from "../models/requests/UpdateNoteRequest";
import GetAllNotesResponse from "../models/responses/GetAllNotesResponse";
import NoteContentResponse from "../models/responses/NoteContentResponse";
import NoteResponse from "../models/responses/NoteResponse";
import { LocalNoteDataSource } from "./LocalNoteDataSource";

export default class NoteRepository extends BaseRepository {
        private local: LocalNoteDataSource = new LocalNoteDataSource(db)

        private mapToNoteResponse(note: NoteEntity): NoteResponse {
                return {
                        id: note.id!.toString(),
                        workspaceId: note.workspaceId,
                        title: note.title,
                        updatedAt: note.updatedAt
                }
        }

        private mapToNoteContentResponse(noteContent: NoteContentEntity): NoteContentResponse {
                return {
                        id: noteContent.id!.toString(),
                        noteId: noteContent.noteId,
                        content: noteContent.content,
                        updatedAt: noteContent.updatedAt
                }
        }

        async createNoteMetadata(workspaceId: string, title: string): Promise<Result<NoteResponse>> {
                try {
                        const newEntry: NoteEntity = {
                                workspaceId,
                                title,
                                synced: 0,
                                updatedAt: Date.now()
                        }

                        const id = await this.local.createNote(newEntry)

                        return ok(this.mapToNoteResponse({
                                ...newEntry,
                                id: id.toString()
                        }))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to create note metadata")
                }
        }

        async updateNote(request: UpdateNoteRequest): Promise<Result<NoteResponse>> {
                try {
                        const updateEntry: NoteEntity = {
                                id: request.id,
                                workspaceId: request.workspaceId,
                                title: request.title,
                                synced: 0,
                                updatedAt: Date.now()
                        }

                        const updated = await this.local.updateNote(updateEntry)

                        return ok(this.mapToNoteResponse(updated))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to update note")
                }
        }

        async deleteNote(id: string): Promise<Result<string>> {
                try {
                        await this.local.deleteNote(id)

                        return ok(id)
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to delete note")
                }
        }

        async getNoteMetadata(id: string): Promise<Result<NoteResponse>> {
                try {
                        const note = await this.local.getNote(id)

                        if (!note) {
                                return fail(ErrorType.NOT_FOUND, "Note not found")
                        }

                        return ok(this.mapToNoteResponse(note))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to get note")
                }
        }

        async getAllNotes(request: GetAllNotesRequest): Promise<Result<GetAllNotesResponse>> {
                try {
                        const data = await this.local.getAllNotes(request.workspaceId)

                        return ok({
                                notes: data.map(this.mapToNoteResponse)
                        })
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Unable to get notes")
                }
        }

        async createNoteContent(noteId: string, content: string): Promise<Result<NoteContentResponse>> {
                try {
                        const newEntry: NoteContentEntity = {
                                noteId,
                                content,
                                synced: 0,
                                updatedAt: Date.now()
                        }

                        const id = await this.local.createNoteContent(newEntry)

                        return ok(this.mapToNoteContentResponse({
                                ...newEntry,
                                id: id.toString()
                        }))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to create note content")
                }
        }

        async updateNoteContent(request: UpdateNoteContentRequest): Promise<Result<NoteContentResponse>> {
                try {
                        const existing = await this.local.getNoteContent(request.noteId)

                        if (!existing) {
                                return await this.createNoteContent(request.noteId, request.content)
                        }

                        const updated = await this.local.updateNoteContent({
                                id: existing.id,
                                noteId: request.noteId,
                                content: request.content,
                                synced: 0,
                                updatedAt: Date.now()
                        })

                        return ok(this.mapToNoteContentResponse(updated))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to update note content")
                }
        }

        async deleteNoteContent(noteId: string): Promise<Result<string>> {
                try {
                        await this.local.deleteNoteContent(noteId)

                        return ok(noteId)
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to delete note content")
                }
        }

        async getNoteContent(noteId: string): Promise<Result<NoteContentResponse>> {
                try {
                        const noteContent = await this.local.getNoteContent(noteId)

                        if (!noteContent) {
                                return fail(ErrorType.NOT_FOUND, "Note content not found")
                        }

                        return ok(this.mapToNoteContentResponse(noteContent))
                } catch (e) {
                        return fail(ErrorType.DATABASE_ERROR, "Failed to get note content")
                }
        }
}
