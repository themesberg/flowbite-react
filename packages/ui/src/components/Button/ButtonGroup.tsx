import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import { Button, type ButtonProps } from "../Button/Button";
import { buttonGroupTheme } from "./theme";

export interface FlowbiteButtonGroupTheme {
  base: string;
  position: PositionInButtonGroup;
}

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

export interface ButtonGroupProps extends ComponentProps<"div">, Pick<ButtonProps, "outline" | "pill"> {
  theme?: DeepPartial<FlowbiteButtonGroupTheme>;
}

const processChildren = (
  children: React.ReactNode,
  outline: boolean | undefined,
  pill: boolean | undefined,
): ReactNode => {
  return Children.map(children as ReactElement<ButtonProps>[], (child, index) => {
    if (isValidElement(child)) {
      const positionInGroupProp =
        child.type == Button ? { positionInGroup: determinePosition(index, Children.count(children)) } : {};
      // Check if the child has nested children
      if (child.props.children) {
        // Recursively process nested children
        return cloneElement(child, {
          ...child.props,
          children: processChildren(child.props.children, outline, pill),
          ...positionInGroupProp,
        });
      } else {
        return cloneElement(child, {
          outline,
          pill,
          ...positionInGroupProp,
        });
      }
    }
    return child;
  });
};

const determinePosition = (index: number, totalChildren: number): keyof PositionInButtonGroup => {
  return index === 0 ? "start" : index === totalChildren - 1 ? "end" : "middle";
};

export const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  pill,
  theme: customTheme,
  ...props
}: ButtonGroupProps) => {
  const items = useMemo(() => processChildren(children, outline, pill), [children, outline, pill]);

  const theme = resolveTheme([buttonGroupTheme, getStore().theme?.buttonGroup, customTheme]);

  return (
    <div className={twMerge(theme.base, className)} role="group" {...props}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = "Button.Group";
