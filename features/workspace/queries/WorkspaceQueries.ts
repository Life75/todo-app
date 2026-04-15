import { useQuery } from "@tanstack/react-query";
import WorkspaceService from "../services/WorkspaceService";
import WorkspaceRepository from "../repositories/WorkspaceRepository";

const workspaceService = new WorkspaceService(new WorkspaceRepository());

export const workspaceKeys = {
  all: ["workspaces"] as const,
};

export function useWorkspacesQuery() {
  return useQuery({
    queryKey: workspaceKeys.all,
    queryFn: async () => {
      const result = await workspaceService.getWorkspaces();
      if (!result.ok) {
        throw result.error;
      }
      return result.value;
    },
  });
}
