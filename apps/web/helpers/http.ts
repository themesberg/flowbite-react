export async function fetchSafe<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Internal server error!");
  }

  return response.json();
}
