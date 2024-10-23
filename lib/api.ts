export async function fetchApi<T>(endpoint: string): Promise<T> {
  // For server components, we can use relative URLs
  const res = await fetch(endpoint, { 
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
