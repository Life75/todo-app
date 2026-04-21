import { useCreateWorkspaceMutation, useDeleteWorkspaceMutation, useWorkspacesQuery } from "../queries/WorkspaceQueries";
import WorkspaceRepository from "../repositories/WorkspaceRepository";
import WorkspaceService from "../services/WorkspaceService";
export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();
  const createWorkspaceMutation = useCreateWorkspaceMutation();
  const deleteWorskpaceMutation = useDeleteWorkspaceMutation()

  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace: createWorkspaceMutation.mutateAsync,
    deleteWorkspace: deleteWorskpaceMutation.mutateAsync
  };
}
