import { ComponentProps, FC } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbComponent: FC<ComponentProps<'nav'>> = ({ children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);
  const theme = useTheme().theme.breadcrumb;

  return (
    <nav aria-label="Breadcrumb" {...theirProps}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';
export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
