import type { AlertColors } from '../Alert';
import type { AvatarSizes } from '../Avatar';

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme {
  accordion: {
    base: string;
    content: {
      base: string;
    };
    flush: {
      off: string;
      on: string;
    };
    title: {
      arrow: {
        base: string;
        open: string;
      };
      base: string;
      flush: {
        off: string;
        on: string;
      };
      open: {
        off: string;
        on: string;
      };
    };
  };
  alert: {
    base: string;
    borderAccent: string;
    closeButton: {
      base: string;
      color: AlertColors;
    };
    color: AlertColors;
    icon: string;
    rounded: string;
  };
  avatar: {
    base: string;
    bordered: string;
    img: {
      off: string;
      on: string;
    };
    rounded: string;
    size: AvatarSizes;
    stacked: string;
    status: {
      away: string;
      base: string;
      busy: string;
      offline: string;
      online: string;
    };
    statusPosition: FlowbitePositions;
  };
  badge: {
    base: string;
    color: Colors;
    href: string;
    icon: {
      off: string;
      on: string;
      size: BadgeSizes;
    };
    size: BadgeSizes;
  };
  breadcrumb: {
    item: {
      base: string;
      chevron: string;
      href: {
        off: string;
        on: string;
      };
      icon: string;
    };
    list: string;
  };
  card: {
    base: string;
    children: string;
    horizontal: {
      off: string;
      on: string;
    };
    img: {
      base: string;
      horizontal: {
        off: string;
        on: string;
      };
    };
  };
}

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface FlowbiteColors {
  alternative: string;
  dark: string;
  failure: string;
  gray: string;
  info: string;
  light: string;
  success: string;
  warning: string;
}

export interface FlowbitePositions {
  'bottom-left': string;
  'bottom-right': string;
  'top-left': string;
  'top-right': string;
}

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}
