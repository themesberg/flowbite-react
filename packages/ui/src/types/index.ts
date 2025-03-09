// Utility types
export type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K]: T[K];
};

export type DynamicStringEnum<T> = T | (string & {});

export type DynamicStringEnumKeysOf<T extends object> = DynamicStringEnum<keyof RemoveIndexSignature<T>>;

export type DeepPartialOf<T, V> = T extends object ? { [K in keyof T]?: DeepPartialOf<T[K], V> } | V : V;

export type DeepPartialBoolean<T> = DeepPartialOf<T, boolean>;

export type ApplyTheme = "merge" | "replace";

export type DeepPartialApplyTheme<T> = DeepPartialOf<T, ApplyTheme>;

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

export type WithoutThemingProps<T> = Omit<T, keyof ThemingProps<T>>;

// Common types
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

// Theme interface using inline imports
export interface FlowbiteTheme {
  accordion: import("../components/Accordion").AccordionTheme;
  alert: import("../components/Alert").AlertTheme;
  avatar: import("../components/Avatar").AvatarTheme;
  badge: import("../components/Badge").BadgeTheme;
  blockquote: import("../components/Blockquote").BlockquoteTheme;
  breadcrumb: import("../components/Breadcrumb").BreadcrumbTheme;
  button: import("../components/Button").ButtonTheme;
  buttonGroup: import("../components/Button").ButtonGroupTheme;
  card: import("../components/Card").CardTheme;
  carousel: import("../components/Carousel").CarouselTheme;
  checkbox: import("../components/Checkbox").CheckboxTheme;
  clipboard: import("../components/Clipboard").ClipboardTheme;
  darkThemeToggle: import("../components/DarkThemeToggle").DarkThemeToggleTheme;
  datepicker: import("../components/Datepicker").DatepickerTheme;
  drawer: import("../components/Drawer").DrawerTheme;
  dropdown: import("../components/Dropdown").DropdownTheme;
  fileInput: import("../components/FileInput").FileInputTheme;
  floatingLabel: import("../components/FloatingLabel").FloatingLabelTheme;
  footer: import("../components/Footer").FooterTheme;
  helperText: import("../components/HelperText").HelperTextTheme;
  hr: import("../components/HR").HRTheme;
  kbd: import("../components/Kbd").KbdTheme;
  label: import("../components/Label").LabelTheme;
  list: import("../components/List").ListTheme;
  listGroup: import("../components/ListGroup").ListGroupTheme;
  megaMenu: import("../components/MegaMenu").MegaMenuTheme;
  modal: import("../components/Modal").ModalTheme;
  navbar: import("../components/Navbar").NavbarTheme;
  pagination: import("../components/Pagination").PaginationTheme;
  popover: import("../components/Popover").PopoverTheme;
  progress: import("../components/Progress").ProgressTheme;
  radio: import("../components/Radio").RadioTheme;
  rangeSlider: import("../components/RangeSlider").RangeSliderTheme;
  rating: import("../components/Rating").RatingTheme;
  ratingAdvanced: import("../components/Rating").RatingAdvancedTheme;
  select: import("../components/Select").SelectTheme;
  sidebar: import("../components/Sidebar").SidebarTheme;
  spinner: import("../components/Spinner").SpinnerTheme;
  table: import("../components/Table").TableTheme;
  tabs: import("../components/Tabs").TabsTheme;
  textarea: import("../components/Textarea").TextareaTheme;
  textInput: import("../components/TextInput").TextInputTheme;
  timeline: import("../components/Timeline").TimelineTheme;
  toast: import("../components/Toast").ToastTheme;
  toggleSwitch: import("../components/ToggleSwitch").ToggleSwitchTheme;
  tooltip: import("../components/Tooltip").TooltipTheme;
}

export type CustomFlowbiteTheme = DeepPartial<FlowbiteTheme>;

// Props interface using inline imports
export interface FlowbiteProps {
  accordion: Partial<WithoutThemingProps<import("../components/Accordion").AccordionProps>>;
  accordionContent: Partial<WithoutThemingProps<import("../components/Accordion").AccordionContentProps>>;
  accordionTitle: Partial<WithoutThemingProps<import("../components/Accordion").AccordionTitleProps>>;
  alert: Partial<WithoutThemingProps<import("../components/Alert").AlertProps>>;
  avatar: Partial<WithoutThemingProps<import("../components/Avatar").AvatarProps>>;
  avatarGroup: Partial<WithoutThemingProps<import("../components/Avatar").AvatarGroupProps>>;
  avatarGroupCounter: Partial<WithoutThemingProps<import("../components/Avatar").AvatarGroupCounterProps>>;
  badge: Partial<WithoutThemingProps<import("../components/Badge").BadgeProps>>;
  banner: Partial<WithoutThemingProps<import("../components/Banner").BannerProps>>;
  bannerCollapseButton: Partial<WithoutThemingProps<import("../components/Banner").BannerCollapseButtonProps>>;
  blockquote: Partial<WithoutThemingProps<import("../components/Blockquote").BlockquoteProps>>;
  breadcrumb: Partial<WithoutThemingProps<import("../components/Breadcrumb").BreadcrumbProps>>;
  breadcrumbItem: Partial<WithoutThemingProps<import("../components/Breadcrumb").BreadcrumbItemProps>>;
  button: Partial<WithoutThemingProps<import("../components/Button").ButtonProps>>;
  buttonGroup: Partial<WithoutThemingProps<import("../components/Button").ButtonGroupProps>>;
  card: Partial<WithoutThemingProps<import("../components/Card").CardProps>>;
  carousel: Partial<WithoutThemingProps<import("../components/Carousel").CarouselProps>>;
  checkbox: Partial<WithoutThemingProps<import("../components/Checkbox").CheckboxProps>>;
  clipboard: Partial<WithoutThemingProps<import("../components/Clipboard").ClipboardProps>>;
  clipboardWithIcon: Partial<WithoutThemingProps<import("../components/Clipboard").ClipboardWithIconProps>>;
  clipboardWithIconText: Partial<WithoutThemingProps<import("../components/Clipboard").ClipboardWithIconTextProps>>;
  darkThemeToggle: Partial<WithoutThemingProps<import("../components/DarkThemeToggle").DarkThemeToggleProps>>;
  datepicker: Partial<WithoutThemingProps<import("../components/Datepicker").DatepickerProps>>;
  drawer: Partial<WithoutThemingProps<import("../components/Drawer").DrawerProps>>;
  drawerHeader: Partial<WithoutThemingProps<import("../components/Drawer").DrawerHeaderProps>>;
  drawerItems: Partial<WithoutThemingProps<import("../components/Drawer").DrawerItemsProps>>;
  dropdown: Partial<WithoutThemingProps<import("../components/Dropdown").DropdownProps>>;
  dropdownDivider: Partial<WithoutThemingProps<import("../components/Dropdown").DropdownDividerProps>>;
  dropdownHeader: Partial<WithoutThemingProps<import("../components/Dropdown").DropdownHeaderProps>>;
  dropdownItem: Partial<WithoutThemingProps<import("../components/Dropdown").DropdownItemProps>>;
  fileInput: Partial<WithoutThemingProps<import("../components/FileInput").FileInputProps>>;
  floatingLabel: Partial<WithoutThemingProps<import("../components/FloatingLabel").FloatingLabelProps>>;
  footer: Partial<WithoutThemingProps<import("../components/Footer").FooterProps>>;
  footerBrand: Partial<WithoutThemingProps<import("../components/Footer").FooterBrandProps>>;
  footerCopyright: Partial<WithoutThemingProps<import("../components/Footer").FooterCopyrightProps>>;
  footerDivider: Partial<WithoutThemingProps<import("../components/Footer").FooterDividerProps>>;
  footerIcon: Partial<WithoutThemingProps<import("../components/Footer").FooterIconProps>>;
  footerLink: Partial<WithoutThemingProps<import("../components/Footer").FooterLinkProps>>;
  footerLinkGroup: Partial<WithoutThemingProps<import("../components/Footer").FooterLinkGroupProps>>;
  footerTitle: Partial<WithoutThemingProps<import("../components/Footer").FooterTitleProps>>;
  helperText: Partial<WithoutThemingProps<import("../components/HelperText").HelperTextProps>>;
  hr: Partial<WithoutThemingProps<import("../components/HR").HRProps>>;
  hrIcon: Partial<WithoutThemingProps<import("../components/HR").HRIconProps>>;
  hrSquare: Partial<WithoutThemingProps<import("../components/HR").HRSquareProps>>;
  hrText: Partial<WithoutThemingProps<import("../components/HR").HRTextProps>>;
  hrTrimmed: Partial<WithoutThemingProps<import("../components/HR").HRTrimmedProps>>;
  kbd: Partial<WithoutThemingProps<import("../components/Kbd").KbdProps>>;
  label: Partial<WithoutThemingProps<import("../components/Label").LabelProps>>;
  list: Partial<WithoutThemingProps<import("../components/List").ListProps>>;
  listGroup: Partial<WithoutThemingProps<import("../components/ListGroup").ListGroupProps>>;
  listGroupItem: Partial<WithoutThemingProps<import("../components/ListGroup").ListGroupItemProps>>;
  listItem: Partial<WithoutThemingProps<import("../components/List").ListItemProps>>;
  megaMenu: Partial<WithoutThemingProps<import("../components/MegaMenu").MegaMenuProps>>;
  megaMenuDropdown: Partial<WithoutThemingProps<import("../components/MegaMenu").MegaMenuDropdownProps>>;
  megaMenuDropdownToggle: Partial<WithoutThemingProps<import("../components/MegaMenu").MegaMenuDropdownToggleProps>>;
  modal: Partial<WithoutThemingProps<import("../components/Modal").ModalProps>>;
  modalBody: Partial<WithoutThemingProps<import("../components/Modal").ModalBodyProps>>;
  modalFooter: Partial<WithoutThemingProps<import("../components/Modal").ModalFooterProps>>;
  modalHeader: Partial<WithoutThemingProps<import("../components/Modal").ModalHeaderProps>>;
  navbar: Partial<WithoutThemingProps<import("../components/Navbar").NavbarProps>>;
  navbarBrand: Partial<WithoutThemingProps<import("../components/Navbar").NavbarBrandProps>>;
  navbarCollapse: Partial<WithoutThemingProps<import("../components/Navbar").NavbarCollapseProps>>;
  navbarLink: Partial<WithoutThemingProps<import("../components/Navbar").NavbarLinkProps>>;
  navbarToggle: Partial<WithoutThemingProps<import("../components/Navbar").NavbarToggleProps>>;
  pagination: Partial<WithoutThemingProps<import("../components/Pagination").PaginationProps>>;
  popover: Partial<WithoutThemingProps<import("../components/Popover").PopoverProps>>;
  progress: Partial<WithoutThemingProps<import("../components/Progress").ProgressProps>>;
  radio: Partial<WithoutThemingProps<import("../components/Radio").RadioProps>>;
  rangeSlider: Partial<WithoutThemingProps<import("../components/RangeSlider").RangeSliderProps>>;
  rating: Partial<WithoutThemingProps<import("../components/Rating").RatingProps>>;
  ratingAdvanced: Partial<WithoutThemingProps<import("../components/Rating").RatingAdvancedProps>>;
  ratingStar: Partial<WithoutThemingProps<import("../components/Rating").RatingStarProps>>;
  select: Partial<WithoutThemingProps<import("../components/Select").SelectProps>>;
  sidebar: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarProps>>;
  sidebarCollapse: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarCollapseProps>>;
  sidebarCTA: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarCTAProps>>;
  sidebarItem: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarItemProps>>;
  sidebarItemGroup: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarItemGroupProps>>;
  sidebarItems: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarItemsProps>>;
  sidebarLogo: Partial<WithoutThemingProps<import("../components/Sidebar").SidebarLogoProps>>;
  spinner: Partial<WithoutThemingProps<import("../components/Spinner").SpinnerProps>>;
  tabItem: Partial<WithoutThemingProps<import("../components/Tabs").TabItemProps>>;
  table: Partial<WithoutThemingProps<import("../components/Table").TableProps>>;
  tableBody: Partial<WithoutThemingProps<import("../components/Table").TableBodyProps>>;
  tableCell: Partial<WithoutThemingProps<import("../components/Table").TableCellProps>>;
  tableHead: Partial<WithoutThemingProps<import("../components/Table").TableHeadProps>>;
  tableHeadCell: Partial<WithoutThemingProps<import("../components/Table").TableHeadCellProps>>;
  tableRow: Partial<WithoutThemingProps<import("../components/Table").TableRowProps>>;
  tabs: Partial<WithoutThemingProps<import("../components/Tabs").TabsProps>>;
  textarea: Partial<WithoutThemingProps<import("../components/Textarea").TextareaProps>>;
  textInput: Partial<WithoutThemingProps<import("../components/TextInput").TextInputProps>>;
  timeline: Partial<WithoutThemingProps<import("../components/Timeline").TimelineProps>>;
  timelineBody: Partial<WithoutThemingProps<import("../components/Timeline").TimelineBodyProps>>;
  timelineContent: Partial<WithoutThemingProps<import("../components/Timeline").TimelineContentProps>>;
  timelineItem: Partial<WithoutThemingProps<import("../components/Timeline").TimelineItemProps>>;
  timelinePoint: Partial<WithoutThemingProps<import("../components/Timeline").TimelinePointProps>>;
  timelineTime: Partial<WithoutThemingProps<import("../components/Timeline").TimelineTimeProps>>;
  timelineTitle: Partial<WithoutThemingProps<import("../components/Timeline").TimelineTitleProps>>;
  toast: Partial<WithoutThemingProps<import("../components/Toast").ToastProps>>;
  toastToggle: Partial<WithoutThemingProps<import("../components/Toast").ToastToggleProps>>;
  toggleSwitch: Partial<WithoutThemingProps<import("../components/ToggleSwitch").ToggleSwitchProps>>;
  tooltip: Partial<WithoutThemingProps<import("../components/Tooltip").TooltipProps>>;
}
