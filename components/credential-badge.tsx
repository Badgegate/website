'use client'

import React from 'react';
import { ShieldIcon, ShieldCheck } from "lucide-react"
import { Credential } from '@/lib/types';
import { CredentialDetail } from '@/components/credential-detail';

interface CredentialBadgeProps {
  credential: Credential;
  hasPermission?: boolean;
}



export default function CredentialBadge({ credential, hasPermission =false }: CredentialBadgeProps) {
  return (
    <CredentialDetail credential={credential}>
      <li className={`flex items-center gap-1 h-10 pl-3 pr-4 py-2 rounded-full ${hasPermission ?'bg-primary/15' : 'bg-muted'}  text-muted-foreground cursor-pointer hover:text-foreground`}>
        {hasPermission 
          ? <ShieldCheck className='w-4 h-4 text-primary' />
          : <ShieldIcon className='w-4 h-4'/>
        }
        <span className={`text-sm font-semibold ${hasPermission && 'text-primary'}`}>
          {credential.name}
        </span>
      </li>
    </CredentialDetail>
  );
}
