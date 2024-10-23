import Navbar from "@/components/navbar";
import OpportunityCard from "@/components/opportunity-card";
import { fetchApi } from "@/lib/api";
import { Opportunity } from '@/lib/types';

async function getOpportunities(): Promise<Opportunity[]> {
  return fetchApi<Opportunity[]>('/api/opportunities');
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
