import { useWorkspacesQuery } from "../queries/WorkspaceQueries";
import WorkspaceRepository from "../repositories/WorkspaceRepository";
import WorkspaceService from "../services/WorkspaceService";
export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();
  const service = new WorkspaceService(new WorkspaceRepository())
  async function createWorkspace(name: string) {
    await service.createWorkspace(name)
  }


  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace
  };
}
