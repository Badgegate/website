import Navbar from "@/components/navbar";
import OpportunityCard from "@/components/opportunity-card";
import { Opportunity } from '@/lib/types';
import { notFound } from 'next/navigation';
import OpportunityDetail from '@/components/opportunity-detail';
import { markdownToHtml } from '@/lib/markdown';

async function getOpportunities(): Promise<Opportunity[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/opportunities`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch opportunities');
  }
  return res.json();
}

async function getOpportunity(id: string): Promise<Opportunity | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/opportunities/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function Home() {
  const opportunities: Opportunity[] = await getOpportunities();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col gap-4 items-center mt-12 px-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard 
              id={opportunity.id}
              key={opportunity.id}
              postedDate={opportunity.postedDate}
              title={opportunity.title}
              description={opportunity.description}
              company={opportunity.company}
              requiredCredentials={opportunity.requiredCredentials} 
              markdownContent={""}              
            />
          ))}
        </div>  
      </main>
    </>
  );
}

export async function OpportunityPage({ params }: { params: { id: string } }) {
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
