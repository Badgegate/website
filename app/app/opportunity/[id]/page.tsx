import { notFound } from "next/navigation";
import { opportunities } from "@/lib/data/opportunities";
import OpportunityDetail from "@/components/opportunity-detail";

export async function generateStaticParams() {
  return opportunities.map((opportunity) => ({
    id: opportunity.id,
  }));
}

interface OpportunityPageProps {
  params: {
    id: string;
  };
}

export default async function OpportunityPage({ params }: OpportunityPageProps) {
  const opportunity = opportunities.find(opp => opp.id === params.id);

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="flex-grow">
      <OpportunityDetail opportunity={opportunity} />
    </main>
  );
}