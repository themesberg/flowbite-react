import type { AlertColors } from '../Alert';
import type { AvatarSizes } from '../Avatar';
import type { BadgeColors, BadgeSizes } from '../Badge';
import type { SpinnerColors, SpinnerSizes } from '../Spinner';
import type { ButtonColors, ButtonOutlineColors, ButtonSizes } from '../Button';
import type { ButtonGradientColors, ButtonGradientDuoToneColors } from '../Button';
import type { DeepPartial } from '../../helpers/deep-partial';
import type { PositionInButtonGroup } from '../Button/ButtonGroup';
import type { StarSizes } from '../Rating';

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme {
  accordion: {
    base: string;
    content: {
      base: string;
    };
    flush: FlowbiteBoolean;
    title: {
      arrow: {
        base: string;
        open: {
          off: string;
          on: string;
        };
      };
      base: string;
      flush: FlowbiteBoolean;
      heading: string;
      open: FlowbiteBoolean;
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
    color: BadgeColors;
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
  button: {
    base: string;
    color: ButtonColors;
    disabled: string;
    gradient: ButtonGradientColors;
    gradientDuoTone: ButtonGradientDuoToneColors;
    inner: {
      base: string;
      position: PositionInButtonGroup;
    };
    label: string;
    outline: FlowbiteBoolean & {
      color: ButtonOutlineColors;
      pill: FlowbiteBoolean;
    };
    pill: FlowbiteBoolean;
    size: ButtonSizes;
  };
  buttonGroup: {
    base: string;
    position: PositionInButtonGroup;
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
  carousel: {
    base: string;
    indicators: {
      active: {
        off: string;
        on: string;
      };
      base: string;
      wrapper: string;
    };
    item: {
      base: string;
      wrapper: string;
    };
    leftControl: string;
    rightControl: string;
    scrollContainer: {
      base: string;
      snap: string;
    };
  };
  modal: {
    base: string;
    visible: string;
    hidden: string;
    content: {
      base: string;
      inner: string;
    };
    body: {
      base: string;
      popup: string;
    };
    header: {
      base: string;
      popup: string;
      title: string;
      close: {
        base: string;
        icon: string;
      };
    };
    footer: {
      base: string;
      popup: string;
    };
  };
  rating: {
    base: string;
    star: {
      sizes: StarSizes;
      filled: string;
      empty: string;
    };
    advanced: {
      base: string;
      label: string;
      progress: {
        base: string;
        fill: string;
        label: string;
      };
    };
  };
  pagination: {
    base: string;
    layout: {
      table: {
        base: string;
        span: string;
      };
    };
    pages: {
      base: string;
      showIcon: string;
      previous: {
        base: string;
        icon: string;
      };
      next: {
        base: string;
        icon: string;
      };
      selector: {
        base: string;
        active: string;
      };
    };
  };
  spinner: {
    base: string;
    color: SpinnerColors;
    light: {
      off: {
        base: string;
        color: SpinnerColors;
      };
      on: {
        base: string;
        color: SpinnerColors;
      };
    };
    size: SpinnerSizes;
  };
  toast: {
    base: string;
    closed: string;
    removed: string;
    toggle: {
      base: string;
      icon: string;
    };
  };
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface FlowbiteColors {
  cyan: string;
  dark: string;
  failure: string;
  gray: string;
  indigo: string;
  info: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  success: string;
  teal: string;
  warning: string;
}

export interface FlowbiteGradientColors {
  cyan: string;
  failure: string;
  info: string;
  lime: string;
  pink: string;
  purple: string;
  success: string;
  teal: string;
}

export interface FlowbiteGradientDuoToneColors {
  cyanToBlue: string;
  greenToBlue: string;
  pinkToOrange: string;
  purpleToBlue: string;
  purpleToPink: string;
  redToYellow: string;
  tealToLime: string;
}

export type FlowbiteHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

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
