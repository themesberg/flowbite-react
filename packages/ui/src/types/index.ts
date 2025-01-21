import type { AccordionTheme } from "../components/Accordion";
import type { AlertTheme } from "../components/Alert";
import type { AvatarTheme } from "../components/Avatar";
import type { BadgeTheme } from "../components/Badge";
import type { BlockquoteTheme } from "../components/Blockquote";
import type { BreadcrumbTheme } from "../components/Breadcrumb";
import type { ButtonGroupTheme, ButtonTheme } from "../components/Button";
import type { CardTheme } from "../components/Card";
import type { CarouselTheme } from "../components/Carousel";
import type { CheckboxTheme } from "../components/Checkbox";
import type { ClipboardTheme } from "../components/Clipboard";
import type { DarkThemeToggleTheme } from "../components/DarkThemeToggle";
import type { DatepickerTheme } from "../components/Datepicker";
import type { DrawerTheme } from "../components/Drawer";
import type { DropdownTheme } from "../components/Dropdown";
import type { FileInputTheme } from "../components/FileInput";
import type { FloatingLabelTheme } from "../components/FloatingLabel";
import type { FooterTheme } from "../components/Footer";
import type { HelperTextTheme } from "../components/HelperText";
import type { HRTheme } from "../components/HR/HR";
import type { KbdTheme } from "../components/Kbd";
import type { LabelTheme } from "../components/Label";
import type { ListTheme } from "../components/List";
import type { ListGroupTheme } from "../components/ListGroup";
import type { MegaMenuTheme } from "../components/MegaMenu";
import type { ModalTheme } from "../components/Modal";
import type { NavbarTheme } from "../components/Navbar";
import type { PaginationTheme } from "../components/Pagination";
import type { PopoverTheme } from "../components/Popover";
import type { ProgressTheme } from "../components/Progress";
import type { RadioTheme } from "../components/Radio";
import type { RangeSliderTheme } from "../components/RangeSlider";
import type { RatingAdvancedTheme, RatingTheme } from "../components/Rating";
import type { SelectTheme } from "../components/Select";
import type { SidebarTheme } from "../components/Sidebar";
import type { SpinnerTheme } from "../components/Spinner";
import type { TableTheme } from "../components/Table";
import type { TabsTheme } from "../components/Tabs";
import type { TextareaTheme } from "../components/Textarea";
import type { TextInputTheme } from "../components/TextInput";
import type { TimelineTheme } from "../components/Timeline";
import type { ToastTheme } from "../components/Toast";
import type { ToggleSwitchTheme } from "../components/ToggleSwitch";
import type { TooltipTheme } from "../components/Tooltip";

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

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

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
