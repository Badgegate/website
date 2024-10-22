import Navbar from "@/components/navbar";
import OpportunityCard from "@/components/opportunity-card";
import { Opportunity } from '@/lib/types';

async function getOpportunities(): Promise<Opportunity[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/opportunities`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch opportunities');
  }
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
