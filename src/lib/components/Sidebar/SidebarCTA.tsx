import classNames from 'classnames';
import { PropsWithChildren, FC, ComponentProps } from 'react';
import { Color } from '../Button';
import { useSidebarContext } from './SidebarContext';

export interface SidebarCTAProps extends PropsWithChildren<ComponentProps<'div'>> {
  color?: Color;
}

const colorClasses: Record<Color, string> = {
  blue: 'bg-blue-50 dark:bg-blue-900',
  alternative: 'bg-alternative-50 dark:bg-alternative-900',
  dark: 'bg-dark-50 dark:bg-dark-900',
  light: 'bg-light-50 dark:bg-light-900',
  green: 'bg-green-50 dark:bg-green-900',
  red: 'bg-red-50 dark:bg-red-900',
  yellow: 'bg-yellow-50 dark:bg-yellow-900',
  purple: 'bg-purple-50 dark:bg-purple-900',
};

const SidebarCTA: FC<SidebarCTAProps> = ({ children, className, color = 'blue', ...rest }) => {
  const { collapsed } = useSidebarContext();

  return collapsed ? (
    <></>
  ) : (
    <div
      className={classNames('mt-6 rounded-lg p-4', colorClasses[color], className)}
      data-testid="sidebar-cta"
      {...rest}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = 'Sidebar.CTA';
export default SidebarCTA;
