'use client';

import type { ComponentProps, FC } from 'react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { IoMdHome } from 'react-icons/io';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { Tooltip } from '../Tooltip';
import { getTheme } from '../../theme-store';

export interface FlowbiteBottomNavigationItemTheme {
  base: string;
  icon: {
    base: string;
  };
  label: string;
}

export interface BottomNavigationItemProps extends Omit<ComponentProps<'button'>, 'ref'>, Record<string, unknown> {
  icon?: FC<ComponentProps<'svg'>>;
  label: string;
  theme?: DeepPartial<FlowbiteBottomNavigationItemTheme>;
  showTooltip?: boolean;
  showLabel?: boolean;
}

export const BottomNavigationItem: FC<BottomNavigationItemProps> = ({
  icon: Icon,
  label,
  theme: customTheme = {},
  showTooltip = false,
  showLabel = true,
  className,
  ...props
}) => {
  const id = useId();

  const theme = mergeDeep(getTheme().bottomNavigation.item, customTheme);

  return (
    <>
      {showTooltip ? (
        <Tooltip
          content={
            <div id={id} className="flex-1 whitespace-nowrap px-3">
              {label}
            </div>
          }
          placement="top"
        >
          <button
            type="button"
            id={id}
            data-testid="flowbite-bottom-nav-item"
            className={twMerge(theme.base, className)}
            {...props}
          >
            {Icon ? (
              <Icon className={theme.icon.base} fill="currentColor" aria-hidden="true" />
            ) : (
              <IoMdHome className={theme.icon.base} fill="currentColor" aria-hidden="true" />
            )}
            {showLabel ? <span className={theme.label}>{label}</span> : null}
          </button>
        </Tooltip>
      ) : (
        <button
          type="button"
          id={id}
          data-testid="flowbite-bottom-nav-item"
          className={twMerge(theme.base, className)}
          {...props}
        >
          {Icon ? (
            <Icon className={theme.icon.base} fill="currentColor" aria-hidden="true" />
          ) : (
            <IoMdHome className={theme.icon.base} fill="currentColor" aria-hidden="true" />
          )}
          {showLabel ? <span className={theme.label}>{label}</span> : null}
        </button>
      )}
    </>
  );
};

BottomNavigationItem.displayName = 'BottomNavigation.Item';
