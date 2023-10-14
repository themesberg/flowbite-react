export const safeResJson = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error('Internal server error!');
};
