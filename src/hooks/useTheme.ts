import { useContext } from 'react';
import { ThemeContext, ThemeContextProps } from '../lib/contexts/ThemeContext';

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}
