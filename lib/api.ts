export async function fetchApi<T>(endpoint: string): Promise<T> {
  // Ensure we have an absolute URL for the API endpoint
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_API_URL 
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://localhost:3000';

  const url = `${baseUrl}${endpoint}`;

  const res = await fetch(url, { 
    cache: 'no-store',
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }
  
  const data = await res.json();
  return data;
}
