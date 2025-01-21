import type { AccordionProps, AccordionTheme } from "../components/Accordion";
import type { AlertProps, AlertTheme } from "../components/Alert";
import type { AvatarProps, AvatarTheme } from "../components/Avatar";
import type { BadgeProps, BadgeTheme } from "../components/Badge";
import type { BlockquoteProps, BlockquoteTheme } from "../components/Blockquote";
import type { BreadcrumbProps, BreadcrumbTheme } from "../components/Breadcrumb";
import type { ButtonGroupProps, ButtonGroupTheme, ButtonProps, ButtonTheme } from "../components/Button";
import type { CardProps, CardTheme } from "../components/Card";
import type { CarouselProps, CarouselTheme } from "../components/Carousel";
import type { CheckboxProps, CheckboxTheme } from "../components/Checkbox";
import type { ClipboardProps, ClipboardTheme } from "../components/Clipboard";
import type { DarkThemeToggleProps, DarkThemeToggleTheme } from "../components/DarkThemeToggle";
import type { DatepickerProps, DatepickerTheme } from "../components/Datepicker";
import type { DrawerProps, DrawerTheme } from "../components/Drawer";
import type { DropdownProps, DropdownTheme } from "../components/Dropdown";
import type { FileInputProps, FileInputTheme } from "../components/FileInput";
import type { FloatingLabelProps, FloatingLabelTheme } from "../components/FloatingLabel";
import type { FooterProps, FooterTheme } from "../components/Footer";
import type { HelperTextProps, HelperTextTheme } from "../components/HelperText";
import type { HRProps, HRTheme } from "../components/HR";
import type { KbdProps, KbdTheme } from "../components/Kbd";
import type { LabelProps, LabelTheme } from "../components/Label";
import type { ListProps, ListTheme } from "../components/List";
import type { ListGroupProps, ListGroupTheme } from "../components/ListGroup";
import type { MegaMenuProps, MegaMenuTheme } from "../components/MegaMenu";
import type { ModalProps, ModalTheme } from "../components/Modal";
import type { NavbarProps, NavbarTheme } from "../components/Navbar";
import type { PaginationProps, PaginationTheme } from "../components/Pagination";
import type { PopoverProps, PopoverTheme } from "../components/Popover";
import type { ProgressProps, ProgressTheme } from "../components/Progress";
import type { RadioProps, RadioTheme } from "../components/Radio";
import type { RangeSliderProps, RangeSliderTheme } from "../components/RangeSlider";
import type { RatingAdvancedProps, RatingAdvancedTheme, RatingProps, RatingTheme } from "../components/Rating";
import type { SelectProps, SelectTheme } from "../components/Select";
import type { SidebarProps, SidebarTheme } from "../components/Sidebar";
import type { SpinnerProps, SpinnerTheme } from "../components/Spinner";
import type { TableProps, TableTheme } from "../components/Table";
import type { TabsProps, TabsTheme } from "../components/Tabs";
import type { TextareaProps, TextareaTheme } from "../components/Textarea";
import type { TextInputProps, TextInputTheme } from "../components/TextInput";
import type { TimelineProps, TimelineTheme } from "../components/Timeline";
import type { ToastProps, ToastTheme } from "../components/Toast";
import type { ToggleSwitchProps, ToggleSwitchTheme } from "../components/ToggleSwitch";
import type { TooltipProps, TooltipTheme } from "../components/Tooltip";

export interface FlowbiteTheme {
  accordion: AccordionTheme;
  alert: AlertTheme;
  avatar: AvatarTheme;
  badge: BadgeTheme;
  blockquote: BlockquoteTheme;
  breadcrumb: BreadcrumbTheme;
  button: ButtonTheme;
  buttonGroup: ButtonGroupTheme;
  card: CardTheme;
  carousel: CarouselTheme;
  checkbox: CheckboxTheme;
  clipboard: ClipboardTheme;
  darkThemeToggle: DarkThemeToggleTheme;
  datepicker: DatepickerTheme;
  drawer: DrawerTheme;
  dropdown: DropdownTheme;
  fileInput: FileInputTheme;
  floatingLabel: FloatingLabelTheme;
  footer: FooterTheme;
  helperText: HelperTextTheme;
  hr: HRTheme;
  kbd: KbdTheme;
  label: LabelTheme;
  list: ListTheme;
  listGroup: ListGroupTheme;
  megaMenu: MegaMenuTheme;
  modal: ModalTheme;
  navbar: NavbarTheme;
  pagination: PaginationTheme;
  popover: PopoverTheme;
  progress: ProgressTheme;
  radio: RadioTheme;
  rangeSlider: RangeSliderTheme;
  rating: RatingTheme;
  ratingAdvanced: RatingAdvancedTheme;
  select: SelectTheme;
  sidebar: SidebarTheme;
  spinner: SpinnerTheme;
  table: TableTheme;
  tabs: TabsTheme;
  textarea: TextareaTheme;
  textInput: TextInputTheme;
  timeline: TimelineTheme;
  toast: ToastTheme;
  toggleSwitch: ToggleSwitchTheme;
  tooltip: TooltipTheme;
}

export interface FlowbiteProps {
  accordion: WithoutThemingProps<AccordionProps>;
  alert: WithoutThemingProps<AlertProps>;
  avatar: WithoutThemingProps<AvatarProps>;
  badge: WithoutThemingProps<BadgeProps>;
  blockquote: WithoutThemingProps<BlockquoteProps>;
  breadcrumb: WithoutThemingProps<BreadcrumbProps>;
  button: WithoutThemingProps<ButtonProps>;
  buttonGroup: WithoutThemingProps<ButtonGroupProps>;
  card: WithoutThemingProps<CardProps>;
  carousel: WithoutThemingProps<CarouselProps>;
  checkbox: WithoutThemingProps<CheckboxProps>;
  clipboard: WithoutThemingProps<ClipboardProps>;
  darkThemeToggle: WithoutThemingProps<DarkThemeToggleProps>;
  datepicker: WithoutThemingProps<DatepickerProps>;
  drawer: WithoutThemingProps<DrawerProps>;
  dropdown: WithoutThemingProps<DropdownProps>;
  fileInput: WithoutThemingProps<FileInputProps>;
  floatingLabel: WithoutThemingProps<FloatingLabelProps>;
  footer: WithoutThemingProps<FooterProps>;
  helperText: WithoutThemingProps<HelperTextProps>;
  hr: WithoutThemingProps<HRProps>;
  kbd: WithoutThemingProps<KbdProps>;
  label: WithoutThemingProps<LabelProps>;
  list: WithoutThemingProps<ListProps>;
  listGroup: WithoutThemingProps<ListGroupProps>;
  megaMenu: WithoutThemingProps<MegaMenuProps>;
  modal: WithoutThemingProps<ModalProps>;
  navbar: WithoutThemingProps<NavbarProps>;
  pagination: WithoutThemingProps<PaginationProps>;
  popover: WithoutThemingProps<PopoverProps>;
  progress: WithoutThemingProps<ProgressProps>;
  radio: WithoutThemingProps<RadioProps>;
  rangeSlider: WithoutThemingProps<RangeSliderProps>;
  rating: WithoutThemingProps<RatingProps>;
  ratingAdvanced: WithoutThemingProps<RatingAdvancedProps>;
  select: WithoutThemingProps<SelectProps>;
  sidebar: WithoutThemingProps<SidebarProps>;
  spinner: WithoutThemingProps<SpinnerProps>;
  table: WithoutThemingProps<TableProps>;
  tabs: WithoutThemingProps<TabsProps>;
  textarea: WithoutThemingProps<TextareaProps>;
  textInput: WithoutThemingProps<TextInputProps>;
  timeline: WithoutThemingProps<TimelineProps>;
  toast: WithoutThemingProps<ToastProps>;
  toggleSwitch: WithoutThemingProps<ToggleSwitchProps>;
  tooltip: WithoutThemingProps<TooltipProps>;
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

export type FlowbiteHeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface FlowbitePositions {
  "bottom-left": string;
  "bottom-right": string;
  "bottom-center": string;
  "top-left": string;
  "top-center": string;
  "top-right": string;
  "center-left": string;
  center: string;
  "center-right": string;
}

export interface FlowbiteSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
}

export interface ThemingProps<T> {
  /**
   * Partial theme object to merge (or replace, see `applyTheme` prop) with default theme
   *
   * @link https://flowbite-react.com/docs/customize/theme
   * @default undefined
   */
  theme?: DeepPartial<T>;
  /**
   * Indicates which theme properties should be cleared
   *
   * `boolean` | partial `theme` structure of `boolean`
   *
   * @link https://flowbite-react.com/docs/customize/theme
   * @default undefined
   */
  clearTheme?: DeepPartialBoolean<T>;
  /**
   * Specifies how theme properties should be applied/merged
   *
   * `"merge"` | `"replace"` | partial `theme` structure of `"merge"` | `"replace"`
   *
   * @link https://flowbite-react.com/docs/customize/theme
   * @default "merge"
   */
  applyTheme?: DeepPartialApplyTheme<T>;
}

export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};

export type DynamicStringEnum<T> = T | (string & {});

export type DynamicStringEnumKeysOf<T extends object> = DynamicStringEnum<keyof RemoveIndexSignature<T>>;

export type DeepPartialOf<T, V> = T extends object ? { [K in keyof T]?: DeepPartialOf<T[K], V> } | V : V;

export type DeepPartialBoolean<T> = DeepPartialOf<T, boolean>;

export type DeepPartialApplyTheme<T> = DeepPartialOf<T, ApplyTheme>;

export type ApplyTheme = "merge" | "replace";

export type WithoutThemingProps<T> = Omit<T, keyof ThemingProps<T>>;

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;
