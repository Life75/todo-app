import { WorkspaceEntity } from "@/infrastructure/local-db/db";
import { db } from "@/infrastructure/local-db/db";
export class LocalWorkspaceDataSource {
  async getAll(): Promise<WorkspaceEntity[]> {
    return await db.workspaces.toArray();
  }

  async upsert(workspace: WorkspaceEntity): Promise<string> {
    // .put() handles both create and update
    return await db.workspaces.put(workspace);
  }

  async delete(id: string): Promise<void> {
    await db.workspaces.delete(id);
  }

  async getUnsynced(): Promise<WorkspaceEntity[]> {
    return await db.workspaces.where('synced').equals(0).toArray();
  }
}