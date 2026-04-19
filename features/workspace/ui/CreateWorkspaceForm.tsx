import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useState } from "react";

type CreateWorkspaceFormProps = {
  onCreateWorkspace: (name: string) => void;
};

export default function CreateWorkspaceForm({ onCreateWorkspace }: CreateWorkspaceFormProps) {
  const [name, setName] = useState("")


  return (
    <>
      <Field>
        <FieldLabel htmlFor="input-demo-api-key">Name</FieldLabel>
        <Input id="input-demo-api-key" value={name} onChange={(e) => setName(e.target.value)} />

      </Field>
      <Button onClick={() => onCreateWorkspace(name)} disabled={name === ""} >
        Create
      </Button>
    </>
  )

}