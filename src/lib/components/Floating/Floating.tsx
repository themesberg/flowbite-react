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
  style: {
    dark: string;
    light: string;
    auto: string;
  };
}

export interface FloatingProps {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  arrowRef?: React.Ref<SVGSVGElement>;
  children?: React.ReactNode;
  className?: string;
  closeRequestKey?: string;
  dismissOnClick?: boolean;
  initialOpen?: boolean;
  modal?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  placement?: Placement;
  style?: 'dark' | 'light' | 'auto';
  theme: FlowbiteFloatingTheme;
  trigger?: 'hover' | 'click';
}

const FloatingComponent = ({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode;
} & FloatingProps) => {
  const floating = useFloatingHook({ modal, ...restOptions });

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
