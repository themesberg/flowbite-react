"use client";

import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement, useMemo } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { Button, type ButtonProps } from "../Button/Button";
import { buttonGroupTheme } from "./theme";

export interface ButtonGroupTheme {
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
  theme?: DeepPartial<ButtonGroupTheme>;
  resetTheme?: ResetTheme<ButtonGroupTheme>;
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
  resetTheme,
  ...props
}: ButtonGroupProps) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([buttonGroupTheme, provider.theme?.buttonGroup, customTheme], [resetTheme]);

  const items = useMemo(() => processChildren(children, outline, pill), [children, outline, pill]);

  return (
    <div className={twMerge(theme.base, className)} role="group" {...props}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = "ButtonGroup";
