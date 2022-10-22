export * from './Accordion/Accordion';
export * from './Alert/Alert';
export * from './Avatar/Avatar';
export * from './Badge';
export * from './Breadcrumb';
export * from './Button';
export * from './Card';
export * from './Carousel';
export * from './DarkThemeToggle/DarkThemeToggle';
export * from './Dropdown';
export * from './Flowbite';
export type { CustomFlowbiteTheme } from './Flowbite/FlowbiteTheme';
export * from './Footer';
export * from './FormControls';
export * from './ListGroup/ListGroup';
export * from './Modal';
export * from './Navbar';
export * from './Pagination';
export * from './Progress';
export * from './Rating';
export * from './Sidebar/Sidebar';
export * from './Spinner/Spinner';
export * from './Tab/Tabs';
export * from './Table';
export * from './Timeline';
export * from './Toast';
export * from './Tooltip';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
