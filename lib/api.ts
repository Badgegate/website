import { headers } from 'next/headers';

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const headersList = headers();
  const host = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  
  // Ensure the endpoint starts with a forward slash
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  // Construct the full URL
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || `${protocol}://${host}`;
  const url = new URL(normalizedEndpoint, baseUrl);
  
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
