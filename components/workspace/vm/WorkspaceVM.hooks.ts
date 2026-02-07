import { useWorkspacesQuery } from "../queries/WorkspaceQueries";

export default function useWorkspaceVM() {
  const { data: workspaceItems = [], isLoading, error } = useWorkspacesQuery();

  return {
    workspaceItems,
    isLoading,
    error,
  };
}
