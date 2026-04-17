import useWorkspaceVM from "@/features/workspace/vm/WorkspaceVM.hooks";
import { Skeleton } from "@/components/ui/skeleton";
export default function Workspace() {
  const { workspaceItems, isLoading } = useWorkspaceVM();

  return (
    <div id="workspace" className="flex flex-col space-y-2">
      <span className="text-foreground/50 font-semibold uppercase tracking-wider px-3 ">
        My Notes
      </span>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-28" />
        </div>
      ) : (
        <ul className="  text-foreground/80 px-1 ">
          {workspaceItems.map((item, index) => (
            <li className="cursor-pointer hover:dark:bg-[#242424] px-2 h-[44px] flex items-center rounded-lg" key={item.id}>
              <div>
                {item.name}
              </div>
              </li>
          ))}
        </ul>
      )}
    </div>
  );
}
