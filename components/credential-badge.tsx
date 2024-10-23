import React from 'react';
import { ShieldIcon, ExternalLink } from "lucide-react"
import { Credential } from '@/lib/types';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface CredentialBadgeProps {
  credential: Credential;
}

export default function CredentialBadge({ credential }: CredentialBadgeProps) {
  return (
    

<HoverCard>
  <HoverCardTrigger asChild>
    <li className="flex items-center gap-1 h-10 pl-3 pr-4 py-2 rounded-full bg-muted text-muted-foreground cursor-pointer hover:text-foreground">
      <ShieldIcon className="w-4 h-4" />
      <span className="text-sm font-semibold">{credential.name}</span>
      
    </li>
  </HoverCardTrigger>
  <HoverCardContent side="top" sideOffset={-16} className="w-80">
    
    
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">{credential.name}</h4>
      <p className="text-sm">
        {credential.description}
      </p>
      <div className="flex items-center pt-2 text-muted-foreground pb-4">
      <span className="text-xs font-medium">
          Issued by 
        </span>
        <ShieldIcon className="ml-1 mr-px h-4 w-4 " />{" "}
        <span className="text-xs font-bold">
          {credential.issuer}
        </span>
      </div>
      <Link href={`${credential.link}`} target="_blank" className={'w-full '+buttonVariants({ variant: "outline" })}>
        <ExternalLink className="w-4 h-4 mr-1" />
        Learn more
      </Link>
    </div>
  
</HoverCardContent>
</HoverCard>
  );
}