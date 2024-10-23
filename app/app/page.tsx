import Navbar from "@/components/navbar";
import OpportunityCard from "@/components/opportunity-card";
import { getOpportunities } from '@/lib/services/opportunities';
import Link from "next/link";

export default async function Home() {
  const opportunities = await getOpportunities();

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <div className="text-center px-6 my-20">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Explore opportunities</h1>
          <p className="text-foreground">
            Seeking top talent or a qualified audience? <br />
            <Link href="./submit" className="text-primary font-medium hover:underline">Submit your opportunity </Link> 
            {` `}
            to our curated listing.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center px-6">
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
