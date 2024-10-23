import { NextResponse } from 'next/server';
import { opportunities } from '@/lib/data/opportunities';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    return NextResponse.json(opportunities, { status: 200 });
  } catch (err) {
    console.error('Error fetching opportunities:', err);
    return NextResponse.json(
      { message: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
