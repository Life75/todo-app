import WorkspacePageClient from "./WorkspacePageClient";

type WorkspacePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const { id } = await params;

  return <WorkspacePageClient workspaceId={id} />;
}
