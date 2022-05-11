import { cloneElement, ComponentProps, FC, ReactElement, ReactNode } from 'react';
import BreadcrumbItem from './BreadcrumbItem';

export interface BreadcrumbProps extends ComponentProps<'nav'> {
  children: ReactNode[];
}

const BreadcrumbComponent: FC<BreadcrumbProps> = ({ children, ...rest }): JSX.Element => {
  return (
    <nav aria-label="Breadcrumb" {...rest}>
      <ol className="flex items-center">
        {children.map((child, key) => cloneElement(child as ReactElement, { isFirst: key === 0, key }))}
      </ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';
export default Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
