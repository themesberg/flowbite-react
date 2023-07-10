import { useListItem } from '@floating-ui/react';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import type { ButtonBaseProps } from '../Button/ButtonBase';
import { ButtonBase } from '../Button/ButtonBase';
import { DropdownContext } from './Dropdown';

export interface FlowbiteDropdownItemTheme {
  container: string;
  base: string;
  icon: string;
}

export interface DropdownItemProps extends PropsWithChildren, ButtonBaseProps, Record<string, unknown> {
  icon?: FC<ComponentProps<'svg'>>;
  onClick?: () => void;
  theme?: DeepPartial<FlowbiteDropdownItemTheme>;
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  icon: Icon,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
  const { ref, index } = useListItem({ label: typeof children === 'string' ? children : undefined });
  const { activeIndex, dismissOnClick, getItemProps, handleSelect } = useContext(DropdownContext);
  const isActive = activeIndex === index;

  const theme = mergeDeep(useTheme().theme.dropdown.floating.item, customTheme);

  return (
    <li role="menuitem" className={theme.container}>
      <ButtonBase
        ref={ref}
        className={twMerge(theme.base, className)}
        {...props}
        {...getItemProps({
          onClick: () => {
            onClick && onClick();
            dismissOnClick && handleSelect(null);
          },
        })}
        tabIndex={isActive ? 0 : -1}
      >
        {Icon && <Icon className={theme.icon} />}
        {children}
      </ButtonBase>
    </li>
  );
};
