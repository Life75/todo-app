import useWorkspaceVM from "@/components/workspace/vm/WorkspaceVM.hooks";

export default function Workspace() {
  const { workspaceItems } = useWorkspaceVM();

  return (
    <div id="workspace">
      <span className="text-foreground/50 font-semibold uppercase tracking-wider ">
        WORKSPACE
      </span>
      <ul className="space-y-4  text-foreground/80">
        {workspaceItems.map((item, index) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
