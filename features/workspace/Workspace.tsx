"use client";

import useWorkspaceVM from "@/features/workspace/vm/WorkspaceVM.hooks";
import { Skeleton } from "@/components/ui/skeleton";
import {
  CreditCardIcon,
  LogOutIcon,
  Pencil,
  SettingsIcon,
  Trash,
  Trash2,
  TrashIcon,
  UserIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CreateWorkspaceForm from "./ui/CreateWorkspaceForm";
import EditWorkspaceForm from "./ui/EditWorkspaceForm";
import type Workspace from "./models/Workspace";
import Link from "next/link";
import { useWorkspaceStore } from "@/stores/useWorkspaceStore";
export default function Workspace() {
  const { workspaceItems, isLoading, createWorkspace, deleteWorkspace, editWorkspace } = useWorkspaceVM();
  const [open, setOpen] = useState(false)
  const setSelected = useWorkspaceStore((state) => state.setSelected)
  const selectedWorkspace = useWorkspaceStore((state) => state.selectedWorkspace)
  const [editSelectWorkspace, setEditSelectWorkspace] = useState<Workspace>()
  function showCreateWorkspaceModal() {
    //displays pop up modal to create workspace
    setOpen(true)
  }

  function onCreateAction(name: string) {
    createWorkspace(name)
    setOpen(false)
  }

  function onDeleteAction(id: string) {
    console.log("deleting workspace")
    deleteWorkspace(id)
  }

  function onEditAction(workspace: Workspace) {
    editWorkspace(workspace)
    setOpen(false)
  }

  function editWorkspaceModal(workspace: Workspace) {
    setEditSelectWorkspace(workspace)
    setOpen(true)
  }

  function onWorkspaceClick(workspace: Workspace) {
    //console.log(workspace)
    setSelected(workspace)
    console.log(useWorkspaceStore.getState().selectedWorkspace)
    //route to the workspace page 

  }
  //Make menu into its own React component. Would be best and easier development need with passing in actions down

  //We'll need to fix the edit form to allow for edits 
  return (
    <>
      <div id="workspace" className="flex flex-col space-y-2">
        <span className="text-foreground/50 font-semibold uppercase tracking-wider px-3 flex  items-center">
          <div className="grow">Workspaces</div>
          <div className="cursor-pointer" onClick={showCreateWorkspaceModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
              <path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </div>
        </span>
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-28" />
          </div>
        ) : (
          <ul className="text-foreground/80 px-1 ">
            {workspaceItems.map((item, index) => (
              <Link
                href={`/workspace/${item.id}`}
                key={item.id}
                onClick={() => onWorkspaceClick(item)}
                className={`group flex flex-row cursor-pointer px-2 h-[44px] items-center rounded-lg
    ${selectedWorkspace?.id === item.id
                    ? "bg-[#242424] text-white" // active state
                    : "hover:dark:bg-[#242424]"
                  }
  `}
              >                <div className="grow">
                  {item.name}
                </div>



                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex md:opacity-0 md:group-hover:opacity-100 md:transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                      </svg>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => editWorkspaceModal(item)}>
                      <Pencil />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem variant="destructive" onClick={() => onDeleteAction(item.id)}>
                      <Trash2 />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </Link>
            ))}
          </ul>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {
            editSelectWorkspace ? <>
              <DialogHeader>
                <DialogTitle>Edit Workspace</DialogTitle>
              </DialogHeader>
              <EditWorkspaceForm workspaceItem={editSelectWorkspace} onConfirm={onEditAction}></EditWorkspaceForm>
            </>
              :
              <>
                <DialogHeader>
                  <DialogTitle>Create Workspace</DialogTitle>
                </DialogHeader>

                <CreateWorkspaceForm onCreateWorkspace={onCreateAction} >
                </CreateWorkspaceForm>
              </>
          }




        </DialogContent>
      </Dialog>
    </>
  );
}
