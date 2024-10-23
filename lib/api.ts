import { headers } from 'next/headers';

export async function fetchApi<T>(endpoint: string): Promise<T> {
  // For server-side requests in production, use relative URLs
  const url = process.env.NODE_ENV === 'production' 
    ? endpoint 
    : `http://${headers().get('host')}${endpoint}`;
  
  const res = await fetch(url, { 
    cache: 'no-store',
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }
  
  return res.json();
}
