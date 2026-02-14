import useWorkspaceVM from "@/components/workspace/vm/WorkspaceVM.hooks";
import { Skeleton } from "@/components/ui/skeleton";
export default function Workspace() {
  const { workspaceItems, isLoading } = useWorkspaceVM();

  return (
    <div id="workspace">
      <span className="text-foreground/50 font-semibold uppercase tracking-wider ">
        WORKSPACE
      </span>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
      ) : (
        <ul className="space-y-4  text-foreground/80">
          {workspaceItems.map((item, index) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
