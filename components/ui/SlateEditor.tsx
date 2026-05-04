"use client";

import React, { useMemo, useState } from "react";
import { createEditor, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Start typing..." }],
  },
];

export default function SlateEditor() {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);

  const renderLeaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }
    return <span {...attributes}>{children}</span>;
  };

  const isBoldActive = (editor) => {
    const marks = Editor.marks(editor);
    return marks?.bold === true;
  };

  const toggleBold = (editor) => {
    const isActive = isBoldActive(editor);

    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  };

  return (
    <div className="p-4 border rounded-md">
      <Slate editor={editor} initialValue={value} onChange={setValue}>
        <Editable
          renderLeaf={renderLeaf}
          placeholder="Write something..."
          className="min-h-[150px] outline-none"
          onKeyDown={(event) => {
            if (event.ctrlKey && event.key === "b") {
              event.preventDefault();
              toggleBold(editor);
            }
          }}
        />
      </Slate>
    </div>
  );
}