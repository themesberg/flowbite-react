'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';
import { useAccordionContext } from './AccordionPanelContext';

export interface FlowbiteAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen } = useAccordionContext();

  const theme = mergeDeep(getTheme().accordion.content, customTheme);

  return (
    <div
      className={twMerge(theme.base, className)}
      data-testid="flowbite-accordion-content"
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
