import { notFound } from 'next/navigation';
import OpportunityDetail from '@/components/opportunity-detail';
import Navbar from '@/components/navbar';
import { getOpportunityById } from '@/lib/services/opportunities';

export default async function OpportunityPage({ params }: { params: { id: string } }) {
  const opportunity = await getOpportunityById(params.id);
  
  if (!opportunity) {
    notFound();
    return;
  }

  return ( 
    <>
      <Navbar />
      <main className="flex-grow">
        <OpportunityDetail opportunity={opportunity} />
      </main>
    </>
  );
}
