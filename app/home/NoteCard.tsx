"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface NoteCardProps {
  id: string;
}

export default function NoteCard({ id }: NoteCardProps) {
  const router = useRouter();

  function onEditClick() {
    router.push(`/notes/edit/${id}`);
  }

  return (
    <div
      id="note-card"
      className=" md:w-56 md:h-47  w-1/2 h-1/2 bg-orange-300 rounded-xl shadow-xl border-[0.5px]"
    >
      <div className="p-2 gap-2 flex flex-col h-full w-full">
        <div id="title" className="text-gray-800 font-semibold">
          Here is a funny title
        </div>
        <div className="text-wrap  grow wrap-break-word">
          Preview for a given
          card..awdnawdoaoinwdioanwdionawoinaoniwdaoniadw....
        </div>
        <div id="edit-note-btn" className="ml-auto">
          <Button
            variant="outline"
            className="rounded-full w-9"
            onClick={onEditClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
