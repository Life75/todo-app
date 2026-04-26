import Workspace from "@/features/workspace/models/Workspace";

export default function NotesPreviewList(workspace: Workspace) {
    


    return(
        <>
            <div>NotesPreview</div>
            <div>{workspace.name}</div>
        </>
    )
}