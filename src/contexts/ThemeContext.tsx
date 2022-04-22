import { FC, ProviderProps, createContext } from 'react';

export type Mode = string | undefined | 'light' | 'dark';

type ThemeContextProps = {
  mode?: Mode;
  toggleMode?: () => void | null;
};

export const ThemeContext = createContext<ThemeContextProps>({});

type ThemeProviderProps = ProviderProps<{}>;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
