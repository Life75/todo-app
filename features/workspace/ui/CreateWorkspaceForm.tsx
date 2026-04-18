import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface CreateWorkspaceFormProps {
  children?: React.ReactNode; 
}

export default function CreateWorkspaceForm({ children }: CreateWorkspaceFormProps) {

  return (
    <>
    <Field>
      <FieldLabel htmlFor="input-demo-api-key">Name</FieldLabel>
      <Input id="input-demo-api-key" />

    </Field>
        {children}
    </>
  )

}