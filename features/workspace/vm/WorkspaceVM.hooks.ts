import { useCreateWorkspaceMutation, useWorkspacesQuery } from "../queries/WorkspaceQueries";
import WorkspaceRepository from "../repositories/WorkspaceRepository";
import WorkspaceService from "../services/WorkspaceService";
export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();
  const createWorkspaceMutation = useCreateWorkspaceMutation();


  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace: createWorkspaceMutation.mutateAsync
  };
}
