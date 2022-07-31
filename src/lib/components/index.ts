export * from './Accordion';
export * from './Alert';
export * from './Avatar';
export * from './Badge';
export * from './Breadcrumb';
export * from './Button';
export * from './Card';
export * from './Carousel';
export * from './DarkThemeToggle';
export * from './Dropdown';
export * from './Flowbite';
export type { CustomFlowbiteTheme } from './Flowbite/FlowbiteTheme';
export * from './Footer';
export * from './FormControls';
export * from './ListGroup';
export * from './Modal';
export * from './Navbar';
export * from './Pagination';
export * from './Progress';
export * from './Rating';
export * from './Sidebar';
export * from './Spinner';
export * from './Tab';
export * from './Table';
export * from './Timeline';
export * from './Toast';
export * from './Tooltip';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
