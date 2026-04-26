"use client";

import { useWorkspacesQuery } from "@/features/workspace/queries/WorkspaceQueries";

type WorkspacePageClientProps = {
  workspaceId: string;
};

export default function WorkspacePageClient({
  workspaceId,
}: WorkspacePageClientProps) {
  const { data: workspaceItems = [], isLoading } = useWorkspacesQuery();
  const workspace = workspaceItems.find(
    (item) => String(item.id) === workspaceId
  );

  if (isLoading) {
    return (
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
          Workspace
        </p>
        <h1 className="text-3xl font-semibold">Loading...</h1>
      </section>
    );
  }

  if (!workspace) {
    return (
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
          Workspace
        </p>
        <h1 className="text-3xl font-semibold">Workspace not found</h1>
        <p className="text-foreground/70">
          No workspace exists for id {workspaceId}.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-3">
      <p className="text-sm uppercase tracking-[0.2em] text-foreground/50">
        Workspace
      </p>
      <h1 className="text-3xl font-semibold">{workspace.name}</h1>
      <p className="text-foreground/70">Workspace ID: {workspace.id}</p>
    </section>
  );
}
