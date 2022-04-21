import React from 'react';

interface ThemeContextInterface {
  mode?: Mode;
  toggleMode?: any;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({});

interface ThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
