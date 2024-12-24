import type { DeepPartial } from "../../types";
import type { AccordionTheme } from "../Accordion";
import type { AlertTheme } from "../Alert";
import type { AvatarTheme } from "../Avatar";
import type { BadgeTheme } from "../Badge";
import type { BlockquoteTheme } from "../Blockquote";
import type { BreadcrumbTheme } from "../Breadcrumb";
import type { ButtonGroupTheme, ButtonTheme } from "../Button";
import type { CardTheme } from "../Card";
import type { CarouselTheme } from "../Carousel";
import type { CheckboxTheme } from "../Checkbox";
import type { ClipboardTheme } from "../Clipboard";
import type { DarkThemeToggleTheme } from "../DarkThemeToggle";
import type { DatepickerTheme } from "../Datepicker";
import type { DrawerTheme } from "../Drawer";
import type { DropdownTheme } from "../Dropdown";
import type { FileInputTheme } from "../FileInput";
import type { FloatingLabelTheme } from "../FloatingLabel";
import type { FooterTheme } from "../Footer";
import type { HelperTextTheme } from "../HelperText";
import type { HRTheme } from "../HR/HR";
import type { KbdTheme } from "../Kbd";
import type { LabelTheme } from "../Label";
import type { ListTheme } from "../List";
import type { ListGroupTheme } from "../ListGroup";
import type { MegaMenuTheme } from "../MegaMenu";
import type { ModalTheme } from "../Modal";
import type { NavbarTheme } from "../Navbar";
import type { PaginationTheme } from "../Pagination";
import type { PopoverTheme } from "../Popover";
import type { ProgressTheme } from "../Progress";
import type { RadioTheme } from "../Radio";
import type { RangeSliderTheme } from "../RangeSlider";
import type { RatingAdvancedTheme, RatingTheme } from "../Rating";
import type { SelectTheme } from "../Select";
import type { SidebarTheme } from "../Sidebar";
import type { SpinnerTheme } from "../Spinner";
import type { TableTheme } from "../Table";
import type { TabsTheme } from "../Tabs";
import type { TextareaTheme } from "../Textarea";
import type { TextInputTheme } from "../TextInput";
import type { TimelineTheme } from "../Timeline";
import type { ToastTheme } from "../Toast";
import type { ToggleSwitchTheme } from "../ToggleSwitch";
import type { TooltipTheme } from "../Tooltip";

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
