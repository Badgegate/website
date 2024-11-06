"use client";
import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react";
import { DecodedJWT, DecodedRequestedCredential, Opportunity } from '@/lib/types';
import CredentialBadge from '@/components/credential-badge';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import requestVerifiableCredential from '@/lib/services/requestCredential';
import { useAuth } from '../lib/context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

interface OpportunityDetailProps {
  opportunity: Opportunity;
}

export default function OpportunityDetail({ opportunity }: OpportunityDetailProps) {
  const formattedDate = formatDistanceToNow(new Date(opportunity.postedDate), { addSuffix: true });
  const { principal } = useAuth();

  function getCredentialFromLocalStorage(key: string) {
    try {
      const storedCredential: string | null = localStorage.getItem(key);
      if (!storedCredential) return null;

      const decodedToken: DecodedJWT = jwtDecode(storedCredential);
      const decodedIssuerToken: DecodedRequestedCredential = jwtDecode(decodedToken.vp.verifiableCredential[1]);
      const expTimeStamp = decodedIssuerToken.exp;

      if (new Date() > new Date(expTimeStamp * 1000)) {
        localStorage.removeItem(key);
        return null;
      }
      return storedCredential;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function handleCheckPermissions() {
    if (!principal) return;
    
    try {
      const result = await requestVerifiableCredential(principal, opportunity.requiredCredentials[0]);
      const credentialId = opportunity.requiredCredentials[0].id;
      const key = `credential_${principal}_${credentialId}`;
      localStorage.setItem(key, result);
    } catch (error) {
    }
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
              <CredentialBadge key={credential.id} credential={credential} />
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button onClick={handleCheckPermissions} className="w-full">Check permission to apply</Button>
        </CardFooter>
      </Card>

      <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{opportunity.markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}
