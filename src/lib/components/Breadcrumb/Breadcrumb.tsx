import type { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import BreadcrumbItem from './BreadcrumbItem';

export interface FlowbiteBreadcrumbTheme {
  item: {
    base: string;
    chevron: string;
    href: {
      off: string;
      on: string;
    };
    icon: string;
  };
  list: string;
}

const BreadcrumbComponent: FC<ComponentProps<'nav'>> = ({ children, ...props }) => {
  const theme = useTheme().theme.breadcrumb;

  return (
    <nav aria-label="Breadcrumb" {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';
export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
