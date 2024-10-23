import { notFound } from 'next/navigation';
import { Opportunity } from '@/lib/types';
import OpportunityDetail from '@/components/opportunity-detail';
import Navbar from '@/components/navbar';
import { markdownToHtml } from '@/lib/markdown';
import { fetchApi } from "@/lib/api";

async function getOpportunity(id: string): Promise<Opportunity | null> {
  try {
    return await fetchApi<Opportunity>(`/api/opportunities/${id}`);
  } catch {
    return null;
  }
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
