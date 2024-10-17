import { NextResponse } from 'next/server';


// Import the opportunities array from your existing route
import { opportunities } from '../route';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const opportunity = opportunities.find(opp => opp.id === params.id);

  if (!opportunity) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.json(opportunity);
}