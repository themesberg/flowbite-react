import type { FlowbiteDrawerTheme } from "./Drawer";

export const drawerTheme: FlowbiteDrawerTheme = {
  root: {
    base: "fixed z-40 p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800",
    backdrop: "fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80",
    edge: "bottom-16",
    position: {
      top: {
        on: "w-full transform-none top-0 left-0 right-0",
        off: "w-full -translate-y-full top-0 left-0 right-0",
      },
      right: {
        on: "h-screen w-80 transform-none top-0 right-0",
        off: "h-screen w-80 translate-x-full top-0 right-0",
      },
      bottom: {
        on: "w-full transform-none bottom-0 left-0 right-0",
        off: "w-full translate-y-full bottom-0 left-0 right-0",
      },
      left: {
        on: "h-screen w-80 transform-none top-0 left-0",
        off: "h-screen w-80 -translate-x-full top-0 left-0",
      },
    },
  },
  header: {
    inner: {
      closeButton:
        "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white",
      closeIcon: "w-4 h-4",
      titleIcon: "w-4 h-4 me-2.5",
      titleText: "inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400",
    },
    collapsed: {
      on: "hidden",
      off: "block",
    },
  },
  items: {
    base: "",
  },
};
