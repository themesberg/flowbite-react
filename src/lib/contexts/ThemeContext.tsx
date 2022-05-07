import { FC, ReactNode, createContext } from 'react';
import defaultTheme from '../theme/default';

export type Mode = string | undefined | 'light' | 'dark';

export interface ThemeContextProps {
  theme: any;
  mode?: Mode;
  toggleMode?: () => void | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
});

interface ThemeProviderProps {
  children: ReactNode;
  value?: any;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
