import { TextArea } from "@/components/notepad/TextArea";

interface EditNotePageProps {
  params: Promise<{ id: string }>;
}

//This is going to be filled the brim with functionality. Will need to breakdown requirements for this 

export default async function EditNotePage({ params }: EditNotePageProps) {
  const { id } = await params;

  return (
    <div id="edit-note-view">
      <h1 className="text-xl font-semibold mb-4">Edit Note {id}</h1>
      <TextArea />
    </div>
  );
}
