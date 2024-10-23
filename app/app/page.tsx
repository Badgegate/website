import Navbar from "@/components/navbar";
import OpportunityCard from "@/components/opportunity-card";
import { getOpportunities } from '@/lib/services/opportunities';

export default async function Home() {
  const opportunities = await getOpportunities();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="flex flex-col gap-4 items-center mt-12 px-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard 
              key={opportunity.id}
              {...opportunity}
              markdownContent=""              
            />
          ))}
        </div>  
      </main>
    </>
  );
}
