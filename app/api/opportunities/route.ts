import { NextResponse } from 'next/server';
import { opportunities } from '@/lib/data/opportunities';



export async function GET() {
  return NextResponse.json(opportunities);
}
