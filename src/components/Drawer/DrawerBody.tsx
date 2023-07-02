import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/merge-deep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteDrawerBodyTheme {
  base: string;
}

export interface DrawerBodyProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteDrawerBodyTheme>;
}

export const DrawerBody: FC<DrawerBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.drawer.body, customTheme);

  return (
    <div className={classNames(theme.base, className)} {...props}>
      {children}
    </div>
  );
};
