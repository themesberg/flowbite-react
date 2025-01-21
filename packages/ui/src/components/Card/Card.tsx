"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { omit } from "../../helpers/omit";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, FlowbiteBoolean, ThemingProps } from "../../types";
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

export const Card = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>((props, ref) => {
  const { children, className, horizontal, href, theme: customTheme, clearTheme, applyTheme } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [cardTheme, provider.theme?.card, customTheme],
    [get(provider.clearTheme, "card"), clearTheme],
    [get(provider.applyTheme, "card"), applyTheme],
  );

  return (
    <Component
      ref={ref as never}
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
});

Card.displayName = "Card";

function Image({ theme: customTheme, clearTheme, applyTheme, ...props }: CardProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [cardTheme, provider.theme?.card, customTheme],
    [get(provider.clearTheme, "carousel"), clearTheme],
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
}

const removeCustomProps = omit([
  "children",
  "className",
  "horizontal",
  "href",
  "imgAlt",
  "imgSrc",
  "renderImage",
  "theme",
  "clearTheme",
]);
