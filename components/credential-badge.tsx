'use client'

import React from 'react';
import { ShieldIcon } from "lucide-react"
import { Credential } from '@/lib/types';
import { CredentialDetail } from '@/components/credential-detail';

interface CredentialBadgeProps {
  credential: Credential;
}



export default function CredentialBadge({ credential }: CredentialBadgeProps) {
  return (
    <CredentialDetail credential={credential}>
      <li className="flex items-center gap-1 h-10 pl-3 pr-4 py-2 rounded-full bg-muted text-muted-foreground cursor-pointer hover:text-foreground">
        <ShieldIcon className="w-4 h-4" />
        <span className="text-sm font-semibold">{credential.name}</span>
      </li>
    </CredentialDetail>
  );
}
