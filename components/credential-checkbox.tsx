import React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { HelpCircle } from "lucide-react"
import { credentials } from "@/lib/data/credentials"
import { CredentialDetail } from "@/components/credential-detail"

interface CredentialCheckboxProps {
  selectedCredentials: string[]
  onSelectionChange: (ids: string[]) => void
}

export function CredentialCheckbox({ selectedCredentials, onSelectionChange }: CredentialCheckboxProps) {
  const handleCheckedChange = (credentialId: string, checked: boolean) => {
    const newSelection = checked
      ? [...selectedCredentials, credentialId]
      : selectedCredentials.filter(id => id !== credentialId)
    onSelectionChange(newSelection)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {credentials.map((credential) => (
        <div key={credential.id}>
          <CredentialDetail credential={credential}>
            <div className="flex items-center space-x-2 h-10 pl-3 pr-4 py-2 rounded-full bg-muted text-muted-foreground">
              <Checkbox 
                id={`credential${credential.id}`} 
                checked={selectedCredentials.includes(credential.id)}
                onCheckedChange={(checked) => handleCheckedChange(credential.id, checked as boolean)}
                onClick={(e) => e.stopPropagation()}
              />
              <label
                htmlFor={`credential${credential.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {credential.name}
              </label>
              <HelpCircle className="h-4 w-4 cursor-help" />
            </div>
          </CredentialDetail>
        </div>
      ))}
    </div>
  )
}
