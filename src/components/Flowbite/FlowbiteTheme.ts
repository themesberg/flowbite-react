import type { DeepPartial } from '../../types';
import type { FlowbiteAccordionTheme } from '../Accordion';
import type { FlowbiteAlertTheme } from '../Alert';
import type { FlowbiteAvatarTheme } from '../Avatar';
import type { FlowbiteBadgeTheme } from '../Badge';
import type { FlowbiteBlockquoteTheme } from '../Blockquote';
import type { FlowbiteBreadcrumbTheme } from '../Breadcrumb';
import type { FlowbiteButtonGroupTheme, FlowbiteButtonTheme } from '../Button';
import type { FlowbiteCardTheme } from '../Card';
import type { FlowbiteCarouselTheme } from '../Carousel';
import type { FlowbiteCheckboxTheme } from '../Checkbox';
import type { FlowbiteDarkThemeToggleTheme } from '../DarkThemeToggle';
import type { FlowbiteDatepickerTheme } from '../Datepicker';
import type { FlowbiteDropdownTheme } from '../Dropdown';
import type { FlowbiteFileInputTheme } from '../FileInput';
import type { FlowbiteFloatingLabelTheme } from '../FloatingLabel';
import type { FlowbiteFooterTheme } from '../Footer';
import type { FlowbiteHelperTextTheme } from '../HelperText';
import type { FlowbiteKbdTheme } from '../Kbd';
import type { FlowbiteLabelTheme } from '../Label';
import type { FlowbiteListTheme } from '../List';
import type { FlowbiteListGroupTheme } from '../ListGroup';
import type { FlowbiteModalTheme } from '../Modal';
import type { FlowbiteNavbarTheme } from '../Navbar';
import type { FlowbitePaginationTheme } from '../Pagination';
import type { FlowbitePopoverTheme } from '../Popover';
import type { FlowbiteProgressTheme } from '../Progress';
import type { FlowbiteRadioTheme } from '../Radio';
import type { FlowbiteRangeSliderTheme } from '../RangeSlider';
import type { FlowbiteRatingAdvancedTheme, FlowbiteRatingTheme } from '../Rating';
import type { FlowbiteSelectTheme } from '../Select';
import type { FlowbiteSidebarTheme } from '../Sidebar';
import type { FlowbiteSpinnerTheme } from '../Spinner';
import type { FlowbiteTableTheme } from '../Table';
import type { FlowbiteTabsTheme } from '../Tabs';
import type { FlowbiteTextInputTheme } from '../TextInput';
import type { FlowbiteTextareaTheme } from '../Textarea';
import type { FlowbiteTimelineTheme } from '../Timeline';
import type { FlowbiteToastTheme } from '../Toast';
import type { FlowbiteToggleSwitchTheme } from '../ToggleSwitch';
import type { FlowbiteTooltipTheme } from '../Tooltip';

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

export interface FlowbiteTheme {
  accordion: FlowbiteAccordionTheme;
  alert: FlowbiteAlertTheme;
  avatar: FlowbiteAvatarTheme;
  badge: FlowbiteBadgeTheme;
  blockquote: FlowbiteBlockquoteTheme;
  breadcrumb: FlowbiteBreadcrumbTheme;
  button: FlowbiteButtonTheme;
  buttonGroup: FlowbiteButtonGroupTheme;
  card: FlowbiteCardTheme;
  carousel: FlowbiteCarouselTheme;
  datepicker: FlowbiteDatepickerTheme;
  darkThemeToggle: FlowbiteDarkThemeToggleTheme;
  footer: FlowbiteFooterTheme;
  kbd: FlowbiteKbdTheme;
  listGroup: FlowbiteListGroupTheme;
  list: FlowbiteListTheme;
  modal: FlowbiteModalTheme;
  navbar: FlowbiteNavbarTheme;
  rating: FlowbiteRatingTheme;
  ratingAdvanced: FlowbiteRatingAdvancedTheme;
  pagination: FlowbitePaginationTheme;
  sidebar: FlowbiteSidebarTheme;
  progress: FlowbiteProgressTheme;
  spinner: FlowbiteSpinnerTheme;
  tabs: FlowbiteTabsTheme;
  toast: FlowbiteToastTheme;
  tooltip: FlowbiteTooltipTheme;
  popover: FlowbitePopoverTheme;
  dropdown: FlowbiteDropdownTheme;
  checkbox: FlowbiteCheckboxTheme;
  fileInput: FlowbiteFileInputTheme;
  floatingLabel: FlowbiteFloatingLabelTheme;
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
