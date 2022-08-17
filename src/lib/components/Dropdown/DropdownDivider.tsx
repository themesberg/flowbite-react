import type { FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export const DropdownDivider: FC = () => {
  const theme = useTheme().theme.dropdown.floating.divider;

  return <div className={theme} />;
};
