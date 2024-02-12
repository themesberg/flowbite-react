export function safeResJson<T>(res: Response) {
  if (res.ok) return res.json() as Promise<T>;

  throw new Error("Internal server error!");
}
