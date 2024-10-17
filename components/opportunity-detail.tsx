import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react"
import { Opportunity } from '@/lib/types';
import CredentialBadge from '@/components/credential-badge';


interface OpportunityDetailProps {
  opportunity: Opportunity;
  contentHtml: string;
}

export default function OpportunityDetail({ opportunity, contentHtml }: OpportunityDetailProps) {
  const formattedDate = formatDistanceToNow(new Date(opportunity.postedDate), { addSuffix: true });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{opportunity.title}</h1>
      <div className="flex items-center mb-4 text-sm text-muted-foreground">
        <CircleUserRound className="w-4 h-4 mr-2" />
        <span className="font-semibold mr-2">{opportunity.company}</span>
        <span>• Posted {formattedDate}</span>
      </div>
      <p className="mb-8">{opportunity.description}</p>
      <div 
        className="mb-8 prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <h2 className="text-xl font-semibold mb-4">Required Credentials</h2>
      <ul className="space-y-2">
        {opportunity.requiredCredentials.map((credential) => (
          <CredentialBadge key={credential.id} credential={credential} />
        ))}
      </ul>
    </div>
  );
}
