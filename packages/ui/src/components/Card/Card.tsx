"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { omit } from "../../helpers/omit";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { cardTheme } from "./theme";

export interface CardTheme {
  root: CardRootTheme;
  img: CardImageTheme;
}

export interface CardRootTheme {
  base: string;
  children: string;
  horizontal: FlowbiteBoolean;
  href: string;
}

export interface CardImageTheme {
  base: string;
  horizontal: FlowbiteBoolean;
}

interface CommonCardProps extends ComponentProps<"div">, ThemingProps<CardTheme> {
  horizontal?: boolean;
  href?: string;
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never }
  | {
      /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
       */
      renderImage?: (theme: DeepPartial<CardTheme>, horizontal: boolean) => JSX.Element;
      imgAlt?: never;
      imgSrc?: never;
    }
) &
  CommonCardProps;

export const Card: FC<CardProps> = (props) => {
  const { children, className, horizontal, href, theme: customTheme, resetTheme, applyTheme } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [cardTheme, provider.theme?.card, customTheme],
    [get(provider.resetTheme, "card"), resetTheme],
    [get(provider.applyTheme, "card"), applyTheme],
  );

  return (
    <Component
      data-testid="flowbite-card"
      href={href}
      className={twMerge(
        theme.root.base,
        theme.root.horizontal[horizontal ? "on" : "off"],
        href && theme.root.href,
        className,
      )}
      {...theirProps}
    >
      <Image {...props} />
      <div className={theme.root.children}>{children}</div>
    </Component>
  );
};

const Image: FC<CardProps> = ({ theme: customTheme, resetTheme, applyTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [cardTheme, provider.theme?.card, customTheme],
    [get(provider.resetTheme, "carousel"), resetTheme],
    [get(provider.applyTheme, "carousel"), applyTheme],
  );

  if (props.renderImage) {
    return props.renderImage(theme, props.horizontal ?? false);
  }

  if (props.imgSrc) {
    return (
      <img
        data-testid="flowbite-card-image"
        alt={props.imgAlt ?? ""}
        src={props.imgSrc}
        className={twMerge(theme.img.base, theme.img.horizontal[props.horizontal ? "on" : "off"])}
      />
    );
  }

  return null;
};

const removeCustomProps = omit([
  "children",
  "className",
  "horizontal",
  "href",
  "imgAlt",
  "imgSrc",
  "renderImage",
  "theme",
  "resetTheme",
]);
