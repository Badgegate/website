'use client'

import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"

import { Opportunity } from '@/lib/types';
import CredentialBadge from './credential-badge';
import Link from 'next/link';

type OpportunityCardProps = Opportunity;

export default function OpportunityCard({
  id,
  postedDate,
  title,
  description,
  company,
  requiredCredentials,
}: OpportunityCardProps) {
  const formattedDate = formatDistanceToNow(new Date(postedDate), { addSuffix: true });

  return (
    <Card className="w-full max-w-3xl">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 border-b md:border-b-0 md:border-r border-border md:min-h-80 flex flex-col items-start">
            <div className="flex-grow">
              <div className="mb-2 text-sm text-muted-foreground font-semibold">{formattedDate}</div>
              <h2 className="font-bold mb-2">{title}</h2>
              <p className="mb-4">{description}</p>
              <div className="flex items-center mb-6 text-sm text-muted-foreground gap-px">
                <span className="font-semibold mr-1">By </span>
                <CircleUserRound className="w-4 h-4" />
                <span className="font-semibold">{company}</span>
              </div>
            </div>
            <Link href={`/opportunity/${id}`} className={buttonVariants({ variant: "outline" })}>
              Learn more
            </Link>
          </div>
          <div className="p-6 flex flex-col">
            <div className="flex-grow">
              <h3 className="text-xs font-bold mt-1 mb-2 uppercase tracking-wide">unlock opportunity</h3>
              <p className="mb-6">
                The following verified credentials are needed to unlock this opportunity
              </p>
            </div>
            <ul className="flex flex-col gap-2 items-start">
              {requiredCredentials.map((credential) => (
                <CredentialBadge key={credential.id} credential={credential} />
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
