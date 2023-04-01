import type { Placement } from '@floating-ui/react';
import * as React from 'react';
import { FloatingContent } from './FloatingContent';
import { FloatingContext, useFloatingHook } from './FloatingContext';
import { FloatingIcon } from './FloatingIcon';
import { FloatingTrigger } from './FloatingTrigger';

export interface FlowbiteFloatingTheme {
  arrow: FlowbiteFloatingArrowTheme;
  animation: string;
  base: string;
  content: string;
  hidden: string;
  style: {
    auto: string;
    dark: string;
    light: string;
  };
  target: string;
}

export interface FlowbiteFloatingArrowTheme {
  base: string;
  placement: string;
  style: {
    dark: string;
    light: string;
    auto: string;
  };
}

export interface FloatingOptions {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  theme: FlowbiteFloatingTheme;
  trigger?: 'click' | 'hover';
}

const FloatingComponent = ({
  children,
  modal = false,
  theme,
  ...restOptions
}: {
  children: React.ReactNode;
} & FloatingOptions) => {
  const floating = useFloatingHook({ modal, theme, ...restOptions });

  return <FloatingContext.Provider value={floating}>{children}</FloatingContext.Provider>;
};

FloatingComponent.displayName = 'Floating';
FloatingContent.displayName = 'Floating.Content';
FloatingTrigger.displayName = 'Floating.Trigger';
FloatingIcon.displayName = 'Floating.Icon';

export const Floating = Object.assign(FloatingComponent, {
  Content: FloatingContent,
  Trigger: FloatingTrigger,
  Icon: FloatingIcon,
});
