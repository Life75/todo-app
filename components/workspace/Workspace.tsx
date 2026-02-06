import useWorkspaceVM from "@/components/workspace/vm/WorkspaceVM.hooks";

export default function Workspace() {
    const {workspaceItems} = useWorkspaceVM()

    return (
        <div id="workspace">
            <div className="">WORKSPACE</div>

            <ul>
                {workspaceItems.map((item, index) =>
                    <li key={index}>{item}</li>
                 )}
            </ul>
            
        </div>
    )
}