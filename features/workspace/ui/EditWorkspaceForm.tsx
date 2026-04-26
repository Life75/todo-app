import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Workspace from "../models/Workspace";

type EditWorkspaceFormProps = {
  workspaceItem: Workspace;
  onConfirm: (workspace: Workspace) => void;
};

export default function EditWorkspaceForm({
  workspaceItem,
  onConfirm,
}: EditWorkspaceFormProps) {
  const [newWorkspaceName, setNewWorkspaceName] = useState(
    workspaceItem.name
  );

  return (
    <>
      <Field>
        <FieldLabel htmlFor="input-demo-api-key">Name</FieldLabel>
        <Input
          id="input-demo-api-key"
          value={newWorkspaceName}
          onChange={(e) => setNewWorkspaceName(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter" && workspaceItem.name !== "") onConfirm({...workspaceItem, name: newWorkspaceName})
          }}
        />
      </Field>

      <Button
        onClick={() => onConfirm({...workspaceItem, name: newWorkspaceName})}
      >
        Save
      </Button>
    </>
  );
}