import { BaseRepository } from "@/infrastructure/BaseRepository";
import WorkspaceResponse from "@/models/responses/WorkspaceResponse";
import { ErrorType } from "@/models/types/ErrorTypes";
import { fail, ok, Result } from "@/models/types/Result";
import { LocalWorkspaceDataSource } from "./LocalWorkspaceDataSource";
import { WorkspaceEntity } from "@/infrastructure/local-db/db";
import Workspace from "../models/Workspace";
export default class WorkspaceRepository extends BaseRepository {
  private local = new LocalWorkspaceDataSource();

  async getWorkspaces(): Promise<Result<WorkspaceResponse[]>> {
    try {
      const data = await this.local.getAll();
      console.log(data)
      // If DB is empty, you might want to fetch from API once 
      // and "seed" the local DB.
      if (data.length === 0) {
        // const remoteData = await this.remote.fetchAll();
        // await Promise.all(remoteData.map(w => this.local.upsert(w)));
      }

      return ok(data.map(this.mapToWorkspace));
    } catch (e) {
      return fail(
        ErrorType.DATABASE_ERROR,
        "Unable to get workspaces"
      );
    }
  }

  private mapToWorkspace(entity: WorkspaceEntity): WorkspaceResponse {
    return {
      id: entity.id!,
      name: entity.name,
      icon: entity.icon,
      isSelected: false // Or determine this based on global state
    };
  }

  async createWorkspace(name: string): Promise<Result<WorkspaceResponse>> {
    try {
      const newEntry: WorkspaceEntity = {
        name,
        icon: "",
        synced: 0,
        updatedAt: Date.now()
      };

      // 1. Save to Dexie
      const id = await this.local.upsert(newEntry);
      // 2. Map the Entity to the Workspace Response
      // We manually add 'isSelected' here to satisfy the Workspace interface
      const workspace: WorkspaceResponse = {
        id: id,
        name: newEntry.name,
        icon: newEntry.icon,
        isSelected: false // New workspaces are usually not selected by default
      };

      return ok(workspace);
    } catch (e) {
      return fail(ErrorType.DATABASE_ERROR, "Failed to create workspace");
    }
  }

  async deleteWorkspace(id: string): Promise<Result<string>> {

    await this.local.delete(id)
    


    return ok(id)
  }
}