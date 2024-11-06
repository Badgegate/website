"use client";
import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react";
import { Opportunity } from '@/lib/types';
import CredentialBadge from '@/components/credential-badge';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import requestVerifiableCredential from '@/lib/services/requestCredential';
import { useAuth } from '../lib/context/AuthContext';
import { useEffect, useState } from 'react';

interface OpportunityDetailProps {
  opportunity: Opportunity;
}

export default function OpportunityDetail({ opportunity }: OpportunityDetailProps) {
  const formattedDate = formatDistanceToNow(new Date(opportunity.postedDate), { addSuffix: true });
  const { principal } = useAuth();
  const [userPermission, setUserPermission] = useState<boolean>(false);

  useEffect(() => {
    if (!principal) {
      setUserPermission(false);
      return;
    } 

    const credentialId = opportunity.requiredCredentials[0].id;
    const key = `credential_${principal}_${credentialId}`;
    if (getCredentialStatus(key)) {
      setUserPermission(true);
    } else {
      setUserPermission(false);
    } 
  }, [principal]);

  function getCredentialStatus(key: string): boolean {
    try {
      return localStorage.getItem(key) ? true : false;
    } catch {
      return false;
    }
  }

  async function handleCheckPermission() {
    if (!principal) return;
    
    try {
      const result = await requestVerifiableCredential(principal, opportunity.requiredCredentials[0]);
      const credentialId = opportunity.requiredCredentials[0].id;
      const key = `credential_${principal}_${credentialId}`;
      localStorage.setItem(key, result);
      setUserPermission(true);
    } catch {}
  }

  function handleApply() {
    window.open(opportunity.applyUrl, "_blank", "noopener");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 my-8 sm:mt-16 lg:mt-24">
      {/* Opportunity Details */}
      <div className="flex items-center mb-4 text-sm text-muted-foreground">
        <CircleUserRound className="w-4 h-4 mr-2" />
        <span className="font-semibold mr-2">{opportunity.company}</span>
        <span>• Posted {formattedDate}</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">{opportunity.title}</h1>

      <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <p>{opportunity.description}</p>
      </div>

      {/* Permission Card */}
      <Card className="w-full max-w-3xl mb-8">
        <CardContent className="not-prose pt-6">
          <h3 className="text-xs font-bold mt-1 mb-2 uppercase tracking-wide">Unlock Opportunity</h3>
          <p className="mb-6 ">
            The following verified credentials are needed to unlock this opportunity
          </p>
          <ul className="gap-2 flex flex-col items-start">
            {opportunity.requiredCredentials.map((credential) => (
              <CredentialBadge key={credential.id} credential={credential} hasPermission={userPermission} />
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {principal ? (
            userPermission ? (
                <Button onClick={handleApply} className="w-full">
                  Apply
                </Button>
              ) : (
                <Button onClick={handleCheckPermission} className="w-full">
                  Check permission to apply
                </Button>
              )
          ) : (
            <Button className="w-full" variant="disabled">
              Check permission to apply
            </Button>
          )}
        </CardFooter>
      </Card>

      <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{opportunity.markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}
