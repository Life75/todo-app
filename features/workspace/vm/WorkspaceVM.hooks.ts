import { useWorkspacesQuery } from "../queries/WorkspaceQueries";

export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();

  function createWorkspace() {

  }


  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace
  };
}
