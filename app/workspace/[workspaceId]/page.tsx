import WorkspacePageClient from "./WorkspacePageClient";

type WorkspacePageProps = {
  params: Promise<{
    workspaceId: string;
  }>;
};

export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const { workspaceId } = await params;

  return <WorkspacePageClient workspaceId={workspaceId} />;
}
