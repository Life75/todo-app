import Workspace from "@/features/workspace/models/Workspace"
import { create } from 'zustand'

type WorkspaceStore = {
  selectedWorkspace: Workspace | undefined
  setSelected: (workspace: Workspace) => void
}
export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
    selectedWorkspace: undefined, 


    setSelected: (workspace: Workspace) => 
        set(() => ({
            selectedWorkspace: workspace
        }))
}))