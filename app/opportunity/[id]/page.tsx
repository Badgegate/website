import { notFound } from 'next/navigation';
import { Opportunity } from '@/lib/types';
import OpportunityDetail from '@/components/opportunity-detail';
import Navbar from '@/components/navbar';
import { markdownToHtml } from '@/lib/markdown';

async function getOpportunity(id: string): Promise<Opportunity | null> {
  const res = await fetch(`http://localhost:3000/api/opportunities/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function OpportunityPage({ params }: { params: { id: string } }) {
  const opportunity = await getOpportunity(params.id);
  if (!opportunity) {
    notFound();
    return;
  }
  
  // Convert markdown content to HTML
  const contentHtml = await markdownToHtml(opportunity.markdownContent);

  return ( 
    <>
      <Navbar />
      <main className="flex-grow">
        <OpportunityDetail opportunity={opportunity} contentHtml={contentHtml} />
      </main>
    </>
  );
}
