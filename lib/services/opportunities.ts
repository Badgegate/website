import { opportunities } from '@/lib/data/opportunities';
import { Opportunity } from '@/lib/types';

export async function getOpportunities(): Promise<Opportunity[]> {
  return opportunities;
}

export async function getOpportunityById(id: string): Promise<Opportunity | null> {
  const opportunity = opportunities.find(opp => opp.id === id);
  return opportunity || null;
}
