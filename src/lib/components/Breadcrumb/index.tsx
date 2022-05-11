import { ComponentProps, FC } from 'react';
import BreadcrumbItem from './BreadcrumbItem';

const BreadcrumbComponent: FC<ComponentProps<'nav'>> = ({ children, ...rest }): JSX.Element => {
  return (
    <nav aria-label="Breadcrumb" {...rest}>
      <ol className="flex items-center">{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';
export default Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
