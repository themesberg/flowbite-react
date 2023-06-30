import type {
  DeepPartial,
  FlowbiteAccordionTheme,
  FlowbiteAlertTheme,
  FlowbiteAvatarTheme,
  FlowbiteBadgeTheme,
  FlowbiteBreadcrumbTheme,
  FlowbiteButtonGroupTheme,
  FlowbiteButtonTheme,
  FlowbiteCardTheme,
  FlowbiteCarouselTheme,
  FlowbiteCheckboxTheme,
  FlowbiteDarkThemeToggleTheme,
  FlowbiteDropdownTheme,
  FlowbiteFileInputTheme,
  FlowbiteFooterTheme,
  FlowbiteHelperTextTheme,
  FlowbiteLabelTheme,
  FlowbiteListGroupTheme,
  FlowbiteModalTheme,
  FlowbiteNavbarTheme,
  FlowbitePaginationTheme,
  FlowbiteProgressTheme,
  FlowbiteRadioTheme,
  FlowbiteRangeSliderTheme,
  FlowbiteRatingTheme,
  FlowbiteSelectTheme,
  FlowbiteSidebarTheme,
  FlowbiteSpinnerTheme,
  FlowbiteTableTheme,
  FlowbiteTabTheme,
  FlowbiteTextareaTheme,
  FlowbiteTextInputTheme,
  FlowbiteTimelineTheme,
  FlowbiteToastTheme,
  FlowbiteToggleSwitchTheme,
  FlowbiteTooltipTheme,
} from '../../';
// @TODO Fix this import
import type { FlowbiteDatepickerTheme } from '../Datepicker';

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme {
  accordion: FlowbiteAccordionTheme;
  alert: FlowbiteAlertTheme;
  avatar: FlowbiteAvatarTheme;
  badge: FlowbiteBadgeTheme;
  breadcrumb: FlowbiteBreadcrumbTheme;
  button: FlowbiteButtonTheme;
  buttonGroup: FlowbiteButtonGroupTheme;
  card: FlowbiteCardTheme;
  carousel: FlowbiteCarouselTheme;
  datepicker: FlowbiteDatepickerTheme;
  darkThemeToggle: FlowbiteDarkThemeToggleTheme;
  footer: FlowbiteFooterTheme;
  listGroup: FlowbiteListGroupTheme;
  modal: FlowbiteModalTheme;
  navbar: FlowbiteNavbarTheme;
  rating: FlowbiteRatingTheme;
  pagination: FlowbitePaginationTheme;
  sidebar: FlowbiteSidebarTheme;
  progress: FlowbiteProgressTheme;
  spinner: FlowbiteSpinnerTheme;
  tab: FlowbiteTabTheme;
  toast: FlowbiteToastTheme;
  tooltip: FlowbiteTooltipTheme;
  dropdown: FlowbiteDropdownTheme;
  checkbox: FlowbiteCheckboxTheme;
  fileInput: FlowbiteFileInputTheme;
  label: FlowbiteLabelTheme;
  radio: FlowbiteRadioTheme;
  rangeSlider: FlowbiteRangeSliderTheme;
  select: FlowbiteSelectTheme;
  textInput: FlowbiteTextInputTheme;
  textarea: FlowbiteTextareaTheme;
  toggleSwitch: FlowbiteToggleSwitchTheme;
  helperText: FlowbiteHelperTextTheme;
  table: FlowbiteTableTheme;
  timeline: FlowbiteTimelineTheme;
}

export interface FlowbiteBoolean {
  off: string;
  on: string;
}

export interface FlowbiteStateColors {
  info: string;
  failure: string;
  success: string;
  warning: string;
}

export interface FlowbiteColors extends FlowbiteStateColors {
  [key: string]: string;
  blue: string;
  cyan: string;
  dark: string;
  gray: string;
  green: string;
  indigo: string;
  light: string;
  lime: string;
  pink: string;
  purple: string;
  red: string;
  teal: string;
  yellow: string;
}

export interface FlowbiteGradientColors extends Omit<FlowbiteStateColors, 'warning'> {
  [key: string]: string;
  cyan: string;
  lime: string;
  pink: string;
  purple: string;
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
  'bottom-center': string;
  'top-left': string;
  'top-center': string;
  'top-right': string;
  'center-left': string;
  center: string;
  'center-right': string;
}

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface FlowbiteContentPositions {
  center: string;
}
