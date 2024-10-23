'use client'

import React, { useState } from 'react';
import { ShieldIcon, ExternalLink } from "lucide-react"
import { Credential } from '@/lib/types';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"

interface CredentialDetailProps {
  credential: Credential;
  children: React.ReactNode;
  className?: string;
}

const CredentialContent = ({ credential }: { credential: Credential }) => (
  <div className="space-y-1">
    <h4 className="text-sm font-semibold">{credential.name}</h4>
    <p className="text-sm">
      {credential.description}
    </p>
    <div className="flex items-center pt-2 text-muted-foreground pb-4">
      <span className="text-xs font-medium">Issued by</span>
      <ShieldIcon className="ml-1 mr-px h-4 w-4" />
      <span className="text-xs font-bold">{credential.issuer}</span>
      
    </div>
    <Link 
              href={credential.link} 
              target="_blank" 
              className={'w-full mt-4 ' + buttonVariants({ variant: "outline" })}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Learn more
            </Link>
  </div>
);

export function CredentialDetail({ credential, children, className }: CredentialDetailProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Desktop: HoverCard */}
      <div className={`hidden md:block ${className}`}>
        <HoverCard>
          <HoverCardTrigger asChild>
            {children}
          </HoverCardTrigger>
          <HoverCardContent side="top" sideOffset={-16} className="w-80">
            <CredentialContent credential={credential} />
            
          </HoverCardContent>
        </HoverCard>
      </div>

      {/* Mobile: Drawer */}
      <div className={`md:hidden ${className}`} onClick={() => setIsDrawerOpen(true)}>
        {children}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerContent>
            
            <div className="p-6">
              <CredentialContent credential={credential} />
            </div>
            
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
