import { PropsWithChildren, FC } from 'react';

type Color = 'blue' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';

interface SidebarCTAProps extends PropsWithChildren<Record<string, unknown>> {
  color?: Color;
}

const colorClasses: Record<Color, string> = {
  blue: 'p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900',
  alternative: 'p-4 mt-6 bg-alternative-50 rounded-lg dark:bg-alternative-900',
  dark: 'p-4 mt-6 bg-dark-50 rounded-lg dark:bg-dark-900',
  light: 'p-4 mt-6 bg-light-50 rounded-lg dark:bg-light-900',
  green: 'p-4 mt-6 bg-green-50 rounded-lg dark:bg-green-900',
  red: 'p-4 mt-6 bg-red-50 rounded-lg dark:bg-red-900',
  yellow: 'p-4 mt-6 bg-yellow-50 rounded-lg dark:bg-yellow-900',
  purple: 'p-4 mt-6 bg-purple-50 rounded-lg dark:bg-purple-900',
};

const SidebarCTA: FC<SidebarCTAProps> = ({ children, color = 'blue' }) => {
  return <div className={colorClasses[color]}>{children}</div>;
};

SidebarCTA.displayName = 'Sidebar.CTA';

export default SidebarCTA;
