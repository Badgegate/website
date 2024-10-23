export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint, { 
    cache: 'no-store',
    headers: {
      'Accept': 'application/json'
    },
    next: {
      revalidate: 0
    }
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }
  
  const data = await res.json();
  return data;
}
