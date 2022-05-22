export interface FlowbiteTheme {
  accordion: {
    base: string;
    title: {
      base: string;
      isOpen: string;
      isOpenNotFlushed: string;
      notFlushed: string;
    };
    content: {
      base: string;
    };
  };
  alert: {
    base: string;
    borderAccent: string;
    closeButton: {
      base: string;
      color: Colors;
    };
    color: Colors;
    icon: string;
    rounded: string;
  };
}

export type Colors = FlowbiteColors & {
  [key in string]: string;
};

export interface FlowbiteColors {
  failure: string;
  gray: string;
  info: string;
  success: string;
  warning: string;
}
