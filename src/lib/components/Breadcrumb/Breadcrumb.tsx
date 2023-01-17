import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import BreadcrumbItem, { FlowbiteBreadcrumbItemTheme } from './BreadcrumbItem';

export interface FlowbiteBreadcrumbTheme {
  root: FlowbiteBreadcrumbRootTheme;
  item: FlowbiteBreadcrumbItemTheme;
}

export interface FlowbiteBreadcrumbRootTheme {
  base: string;
  list: string;
}

export interface BreadcrumbComponentProps extends ComponentProps<'nav'> {
  theme?: DeepPartial<FlowbiteBreadcrumbRootTheme>;
}

const BreadcrumbComponent: FC<BreadcrumbComponentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.breadcrumb.root, customTheme);

  return (
    <nav aria-label="Breadcrumb" className={classNames(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = 'Breadcrumb';
export const Breadcrumb = Object.assign(BreadcrumbComponent, { Item: BreadcrumbItem });
