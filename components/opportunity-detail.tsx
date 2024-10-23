import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react"
import { Opportunity } from '@/lib/types';
import CredentialBadge from '@/components/credential-badge';
import ReactMarkdown from 'react-markdown';

interface OpportunityDetailProps {
  opportunity: Opportunity;
}

export default function OpportunityDetail({ opportunity }: OpportunityDetailProps) {
  const formattedDate = formatDistanceToNow(new Date(opportunity.postedDate), { addSuffix: true });

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 sm:mt-16 lg:mt-24">
      <div className="flex items-center mb-4 text-sm text-muted-foreground">
        <CircleUserRound className="w-4 h-4 mr-2" />
        <span className="font-semibold mr-2">{opportunity.company}</span>
        <span>• Posted {formattedDate}</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">{opportunity.title}</h1>

      <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{opportunity.markdownContent}</ReactMarkdown>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Required Credentials</h2>
      <ul className="space-y-2">
        {opportunity.requiredCredentials.map((credential) => (
          <CredentialBadge key={credential.id} credential={credential} />
        ))}
      </ul>
    </div>
  );
}
