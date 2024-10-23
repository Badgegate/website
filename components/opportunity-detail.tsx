import { formatDistanceToNow } from 'date-fns';
import { CircleUserRound } from "lucide-react"
import { Opportunity } from '@/lib/types';
import CredentialBadge from '@/components/credential-badge';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from '@/components/ui/card';
interface OpportunityDetailProps {
  opportunity: Opportunity;
}

export default function OpportunityDetail({ opportunity }: OpportunityDetailProps) {
  const formattedDate = formatDistanceToNow(new Date(opportunity.postedDate), { addSuffix: true });

  return (
    <div className="max-w-2xl mx-auto p-6 my-8 sm:mt-16 lg:mt-24">
      <div className="flex items-center mb-4 text-sm text-muted-foreground">
        <CircleUserRound className="w-4 h-4 mr-2" />
        <span className="font-semibold mr-2">{opportunity.company}</span>
        <span>• Posted {formattedDate}</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 tracking-tight">{opportunity.title}</h1>

      <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <p>{opportunity.description}</p>
      </div>
        <Card className="w-full max-w-3xl mb-8">
          <CardContent className="not-prose pt-6">
          <h3 className="text-xs font-bold mt-1 mb-2 uppercase tracking-wide">unlock opportunity</h3>
              <p className="mb-6 ">
                The following verified credentials are needed to unlock this opportunity
              </p>
              <ul className="gap-2 flex flex-col items-start">
        {opportunity.requiredCredentials.map((credential) => (
          <CredentialBadge key={credential.id} credential={credential} />
        ))}
      </ul>
          </CardContent>
        </Card>
        <div className="mb-8 prose prose-lg prose-neutral dark:prose-invert">
        <ReactMarkdown>{opportunity.markdownContent}</ReactMarkdown>
      </div>
      
      
    </div>
  );
}
