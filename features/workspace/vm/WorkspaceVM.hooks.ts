import { useCreateWorkspaceMutation, useDeleteWorkspaceMutation, useEditWorkspaceMutation , useWorkspacesQuery } from "../queries/WorkspaceQueries";
import WorkspaceRepository from "../repositories/WorkspaceRepository";
import WorkspaceService from "../services/WorkspaceService";
export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();
  const createWorkspaceMutation = useCreateWorkspaceMutation();
  const deleteWorskpaceMutation = useDeleteWorkspaceMutation()
  const editWorkspaceMutation = useEditWorkspaceMutation()
  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace: createWorkspaceMutation.mutateAsync,
    deleteWorkspace: deleteWorskpaceMutation.mutateAsync,
    editWorkspace: editWorkspaceMutation.mutateAsync
  };
}
