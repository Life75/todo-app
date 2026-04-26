import { useCreateWorkspaceMutation, useDeleteWorkspaceMutation, useEditWorkspaceMutation , useWorkspacesQuery } from "../queries/WorkspaceQueries";

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
