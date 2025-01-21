import type { AccordionProps, AccordionTheme } from "../components/Accordion";
import type { AlertProps, AlertTheme } from "../components/Alert";
import type { AvatarGroupCounterProps, AvatarGroupProps, AvatarProps, AvatarTheme } from "../components/Avatar";
import type { BadgeProps, BadgeTheme } from "../components/Badge";
import type { BannerCollapseButtonProps, BannerProps } from "../components/Banner";
import type { BlockquoteProps, BlockquoteTheme } from "../components/Blockquote";
import type { BreadcrumbItemProps, BreadcrumbProps, BreadcrumbTheme } from "../components/Breadcrumb";
import type { ButtonGroupProps, ButtonGroupTheme, ButtonProps, ButtonTheme } from "../components/Button";
import type { CardProps, CardTheme } from "../components/Card";
import type { CarouselProps, CarouselTheme } from "../components/Carousel";
import type { CheckboxProps, CheckboxTheme } from "../components/Checkbox";
import type {
  ClipboardProps,
  ClipboardTheme,
  ClipboardWithIconProps,
  ClipboardWithIconTextProps,
} from "../components/Clipboard";
import type { DarkThemeToggleProps, DarkThemeToggleTheme } from "../components/DarkThemeToggle";
import type { DatepickerProps, DatepickerTheme } from "../components/Datepicker";
import type { DrawerHeaderProps, DrawerItemsProps, DrawerProps, DrawerTheme } from "../components/Drawer";
import type {
  DropdownDividerProps,
  DropdownHeaderProps,
  DropdownItemProps,
  DropdownProps,
  DropdownTheme,
} from "../components/Dropdown";
import type { FileInputProps, FileInputTheme } from "../components/FileInput";
import type { FloatingLabelProps, FloatingLabelTheme } from "../components/FloatingLabel";
import type {
  FooterBrandProps,
  FooterCopyrightProps,
  FooterDividerProps,
  FooterIconProps,
  FooterLinkGroupProps,
  FooterLinkProps,
  FooterProps,
  FooterTheme,
  FooterTitleProps,
} from "../components/Footer";
import type { HelperTextProps, HelperTextTheme } from "../components/HelperText";
import type { HRProps, HRTheme } from "../components/HR";
import type { KbdProps, KbdTheme } from "../components/Kbd";
import type { LabelProps, LabelTheme } from "../components/Label";
import type { ListItemProps, ListProps, ListTheme } from "../components/List";
import type { ListGroupItemProps, ListGroupProps, ListGroupTheme } from "../components/ListGroup";
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
  accordion: Partial<WithoutThemingProps<AccordionProps>>;
  alert: Partial<WithoutThemingProps<AlertProps>>;
  avatar: Partial<WithoutThemingProps<AvatarProps>>;
  avatarGroup: Partial<WithoutThemingProps<AvatarGroupProps>>;
  avatarGroupCounter: Partial<WithoutThemingProps<AvatarGroupCounterProps>>;
  badge: Partial<WithoutThemingProps<BadgeProps>>;
  banner: Partial<WithoutThemingProps<BannerProps>>;
  bannerCollapseButton: Partial<WithoutThemingProps<BannerCollapseButtonProps>>;
  blockquote: Partial<WithoutThemingProps<BlockquoteProps>>;
  breadcrumb: Partial<WithoutThemingProps<BreadcrumbProps>>;
  breadcrumbItem: Partial<WithoutThemingProps<BreadcrumbItemProps>>;
  button: Partial<WithoutThemingProps<ButtonProps>>;
  buttonGroup: Partial<WithoutThemingProps<ButtonGroupProps>>;
  card: Partial<WithoutThemingProps<CardProps>>;
  carousel: Partial<WithoutThemingProps<CarouselProps>>;
  checkbox: Partial<WithoutThemingProps<CheckboxProps>>;
  clipboard: Partial<WithoutThemingProps<ClipboardProps>>;
  clipboardWithIcon: Partial<WithoutThemingProps<ClipboardWithIconProps>>;
  clipboardWithIconText: Partial<WithoutThemingProps<ClipboardWithIconTextProps>>;
  darkThemeToggle: Partial<WithoutThemingProps<DarkThemeToggleProps>>;
  datepicker: Partial<WithoutThemingProps<DatepickerProps>>;
  drawer: Partial<WithoutThemingProps<DrawerProps>>;
  drawerHeader: Partial<WithoutThemingProps<DrawerHeaderProps>>;
  drawerItems: Partial<WithoutThemingProps<DrawerItemsProps>>;
  dropdown: Partial<WithoutThemingProps<DropdownProps>>;
  dropdownDivider: Partial<WithoutThemingProps<DropdownDividerProps>>;
  dropdownHeader: Partial<WithoutThemingProps<DropdownHeaderProps>>;
  dropdownItem: Partial<WithoutThemingProps<DropdownItemProps>>;
  fileInput: Partial<WithoutThemingProps<FileInputProps>>;
  floatingLabel: Partial<WithoutThemingProps<FloatingLabelProps>>;
  footer: Partial<WithoutThemingProps<FooterProps>>;
  footerBrand: Partial<WithoutThemingProps<FooterBrandProps>>;
  footerCopyright: Partial<WithoutThemingProps<FooterCopyrightProps>>;
  footerDivider: Partial<WithoutThemingProps<FooterDividerProps>>;
  footerIcon: Partial<WithoutThemingProps<FooterIconProps>>;
  footerLink: Partial<WithoutThemingProps<FooterLinkProps>>;
  footerLinkGroup: Partial<WithoutThemingProps<FooterLinkGroupProps>>;
  footerTitle: Partial<WithoutThemingProps<FooterTitleProps>>;
  helperText: Partial<WithoutThemingProps<HelperTextProps>>;
  hr: Partial<WithoutThemingProps<HRProps>>;
  kbd: Partial<WithoutThemingProps<KbdProps>>;
  label: Partial<WithoutThemingProps<LabelProps>>;
  list: Partial<WithoutThemingProps<ListProps>>;
  listItem: Partial<WithoutThemingProps<ListItemProps>>;
  listGroup: Partial<WithoutThemingProps<ListGroupProps>>;
  listGroupItem: Partial<WithoutThemingProps<ListGroupItemProps>>;
  megaMenu: Partial<WithoutThemingProps<MegaMenuProps>>;
  modal: Partial<WithoutThemingProps<ModalProps>>;
  navbar: Partial<WithoutThemingProps<NavbarProps>>;
  pagination: Partial<WithoutThemingProps<PaginationProps>>;
  popover: Partial<WithoutThemingProps<PopoverProps>>;
  progress: Partial<WithoutThemingProps<ProgressProps>>;
  radio: Partial<WithoutThemingProps<RadioProps>>;
  rangeSlider: Partial<WithoutThemingProps<RangeSliderProps>>;
  rating: Partial<WithoutThemingProps<RatingProps>>;
  ratingAdvanced: Partial<WithoutThemingProps<RatingAdvancedProps>>;
  select: Partial<WithoutThemingProps<SelectProps>>;
  sidebar: Partial<WithoutThemingProps<SidebarProps>>;
  spinner: Partial<WithoutThemingProps<SpinnerProps>>;
  table: Partial<WithoutThemingProps<TableProps>>;
  tabs: Partial<WithoutThemingProps<TabsProps>>;
  textarea: Partial<WithoutThemingProps<TextareaProps>>;
  textInput: Partial<WithoutThemingProps<TextInputProps>>;
  timeline: Partial<WithoutThemingProps<TimelineProps>>;
  toast: Partial<WithoutThemingProps<ToastProps>>;
  toggleSwitch: Partial<WithoutThemingProps<ToggleSwitchProps>>;
  tooltip: Partial<WithoutThemingProps<TooltipProps>>;
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
