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
  onConfirm: (name: string) => void;
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
        />
      </Field>

      <Button
        onClick={() => onConfirm(newWorkspaceName)}
        disabled={workspaceItem.name === newWorkspaceName}
      >
        Save
      </Button>
    </>
  );
}