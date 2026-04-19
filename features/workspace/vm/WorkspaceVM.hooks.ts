import { useWorkspacesQuery } from "../queries/WorkspaceQueries";

export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();

  async function createWorkspace(name: string) {
      
  }


  return {
    workspaceItems,
    isLoading,
    error,
    createWorkspace
  };
}
