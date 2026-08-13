import { ErrorType } from "@/models/types/ErrorTypes";
import { ok, Result } from "@/models/types/Result";
import CreateNoteRequest from "../models/requests/CreateNoteRequest";
import DeleteNoteRequest from "../models/requests/DeleteNoteRequest";
import GetAllNotesRequest from "../models/requests/GetAllNotesRequest";
import GetNoteRequest from "../models/requests/GetNoteRequest";
import UpdateNoteContentRequest from "../models/requests/UpdateNoteContentRequest";
import UpdateNoteRequest from "../models/requests/UpdateNoteRequest";
import GetAllNotesResponse from "../models/responses/GetAllNotesResponse";
import NoteDetailResponse from "../models/responses/NoteDetailResponse";
import NoteResponse from "../models/responses/NoteResponse";
import NoteRepository from "../repositories/NoteRepository";

export default class NotesService {
    private repository: NoteRepository

    constructor(repository: NoteRepository) {
        this.repository = repository
    }

    async createNote(request: CreateNoteRequest): Promise<Result<NoteDetailResponse>> {
        const metadataResult = await this.repository.createNoteMetadata(request.workspaceId, request.title)

        if (!metadataResult.success) {
            return metadataResult
        }

        const contentResult = await this.repository.createNoteContent(metadataResult.data.id, request.content)

        if (!contentResult.success) {
            await this.repository.deleteNote(metadataResult.data.id)
            return contentResult
        }

        return ok({
            id: metadataResult.data.id,
            workspaceId: metadataResult.data.workspaceId,
            title: metadataResult.data.title,
            content: contentResult.data.content,
            updatedAt: Math.max(metadataResult.data.updatedAt, contentResult.data.updatedAt)
        })
    }

    async updateNote(request: UpdateNoteRequest): Promise<Result<NoteResponse>> {
        return await this.repository.updateNote(request)
    }

    async updateNoteContent(request: UpdateNoteContentRequest): Promise<Result<NoteDetailResponse>> {
        const metadataResult = await this.repository.getNoteMetadata(request.noteId)

        if (!metadataResult.success) {
            return metadataResult
        }

        const contentResult = await this.repository.updateNoteContent(request)

        if (!contentResult.success) {
            return contentResult
        }

        return ok({
            id: metadataResult.data.id,
            workspaceId: metadataResult.data.workspaceId,
            title: metadataResult.data.title,
            content: contentResult.data.content,
            updatedAt: Math.max(metadataResult.data.updatedAt, contentResult.data.updatedAt)
        })
    }

    async deleteNote(request: DeleteNoteRequest): Promise<Result<string>> {
        const contentResult = await this.repository.deleteNoteContent(request.id)

        if (!contentResult.success && contentResult.error.type !== ErrorType.NOT_FOUND) {
            return contentResult
        }

        return await this.repository.deleteNote(request.id)
    }

    async getNote(request: GetNoteRequest): Promise<Result<NoteDetailResponse>> {
        const metadataResult = await this.repository.getNoteMetadata(request.id)

        if (!metadataResult.success) {
            return metadataResult
        }

        const contentResult = await this.repository.getNoteContent(request.id)

        if (!contentResult.success) {
            return contentResult
        }

        return ok({
            id: metadataResult.data.id,
            workspaceId: metadataResult.data.workspaceId,
            title: metadataResult.data.title,
            content: contentResult.data.content,
            updatedAt: Math.max(metadataResult.data.updatedAt, contentResult.data.updatedAt)
        })
    }

    async getAllNotes(request: GetAllNotesRequest): Promise<Result<GetAllNotesResponse>> {
        return await this.repository.getAllNotes(request)
    }
}
