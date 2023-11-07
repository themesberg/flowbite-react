export interface JsonResponseType {
  [key: string]: string
}

export const safeResJson = (res: Response): Promise<JsonResponseType> => {
  if (res.ok) {
    return res.json();
  }
  throw new Error('Internal server error!');
};
