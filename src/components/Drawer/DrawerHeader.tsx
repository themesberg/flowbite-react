'use client';

import type { ComponentProps, FC } from 'react';
import { useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { MdClose, MdHome } from 'react-icons/md';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useDrawerContext } from './DrawerContext';
import type { FlowbiteBoolean } from '../Flowbite';

export interface FlowbiteDrawerHeaderTheme {
  inner: {
    titleIcon: string;
    titleText: string;
    closeButton: string;
    closeIcon: string;
  };
  collapsed: FlowbiteBoolean;
}

export interface DrawerHeaderProps extends ComponentProps<'div'>, Record<string, unknown> {
  theme?: DeepPartial<FlowbiteDrawerHeaderTheme>;
  titleIcon?: FC<ComponentProps<'svg'>>;
  closeIcon?: FC<ComponentProps<'svg'>>;
  title?: string;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  children,
  className,
  theme: customTheme = {},
  closeIcon: CloseIcon,
  titleIcon: TitleIcon,
  title,
  ...props
}) => {
  const id = useId();

  const { id: mainDivId, isOpen, onClose, theme: rootTheme } = useDrawerContext();

  const theme = mergeDeep(rootTheme.header, customTheme);

  return (
    <div className={twMerge(className)} {...props}>
      <h5 className={twMerge(theme.inner.titleText)} id={mainDivId}>
        {TitleIcon ? (
          <TitleIcon aria-hidden className={twMerge(theme.inner.titleIcon)} />
        ) : (
          <MdHome aria-hidden className={twMerge(theme.inner.titleIcon)} />
        )}
        {title}
      </h5>

      <button
        type="button"
        className={twMerge(theme.inner.closeButton)}
        title="Close"
        aria-label="Close Drawer"
        data-testid="close-drawer"
        onClick={onClose}
      >
        {CloseIcon ? (
          <CloseIcon aria-hidden className={twMerge(theme.inner.closeIcon)} />
        ) : (
          <MdClose aria-hidden className={twMerge(theme.inner.closeIcon)} />
        )}
        <span className="sr-only">Close menu</span>
      </button>
      <span className={theme.collapsed[isOpen ? 'on' : 'off']} id={`flowbite-drawer-header-${id}`}>
        {children}
      </span>
    </div>
  );
};

DrawerHeader.displayName = 'Drawer.Header';
