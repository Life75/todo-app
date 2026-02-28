"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function TextArea() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false
  });

  return (
    <div className="
  border rounded-lg p-4 min-h-[300px]
  focus-within:border-primary
  [&_.ProseMirror]:outline-none
">
      <EditorContent editor={editor} />
    </div>
  )
}