import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { useDrawerContext } from './DrawerContext';

export interface FlowbiteDrawerHeaderTheme {
  base: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}

export interface DrawerHeaderProps extends PropsWithChildren<ComponentProps<'div'>> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteDrawerHeaderTheme>;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  as: Component = 'h3',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.drawer.header, customTheme);
  const { onClose } = useDrawerContext();

  return (
    <div className={classNames(theme.base, className)} {...props}>
      <Component className={theme.title}>{children}</Component>
      <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
        <HiOutlineX aria-hidden className={theme.close.icon} />
      </button>
    </div>
  );
};
