import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import WorkspaceService from "../services/WorkspaceService";
import WorkspaceRepository from "../repositories/WorkspaceRepository";
import Workspace from "../models/Workspace";
import { Result } from "@/models/types/Result";

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

export function useDeleteWorkspaceMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const result = await workspaceService.deleteWorkspace(id);
      if (!result.success) {
        throw result.error;
      }
      return result;
    },
    onSuccess: (result: Result<string>) => {
      queryClient.setQueryData(workspaceKeys.all, (old: Workspace[] = []) => old.filter((e) => e.id !== result.data));
    },
  });
}

export function useEditWorkspaceMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (workspace: Workspace) => {
      const result = await workspaceService.editWorkspace(workspace);
      if (!result.success) {
        throw result.error;
      }
      return result;
    },
    onSuccess: (result: Result<Workspace>) => {
      queryClient.setQueryData(workspaceKeys.all, (old: Workspace[] = []) =>
        old.map((e) =>
          e.id === result.data?.id ? result.data : e
        )
      );
    },
  });
}



