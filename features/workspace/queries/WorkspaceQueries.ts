import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    },
  });
}

export function useCreateWorkspaceMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (name: string) => {
      const result = await workspaceService.createWorkspace(name);
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    },
    onSuccess: (newWorkspace) => {
      queryClient.setQueryData(workspaceKeys.all, (old: any[] = []) => [
        ...old,
        newWorkspace,
      ]);
    },
  });
}
