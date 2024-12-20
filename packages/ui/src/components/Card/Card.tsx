import type { ComponentProps, FC } from "react";
import { omit } from "../../helpers/omit";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { cardTheme } from "./theme";

export interface FlowbiteCardTheme {
  root: FlowbiteCardRootTheme;
  img: FlowbiteCardImageTheme;
}

export interface FlowbiteCardRootTheme {
  base: string;
  children: string;
  horizontal: FlowbiteBoolean;
  href: string;
}

export interface FlowbiteCardImageTheme {
  base: string;
  horizontal: FlowbiteBoolean;
}

interface CommonCardProps extends ComponentProps<"div"> {
  horizontal?: boolean;
  href?: string;
  theme?: DeepPartial<FlowbiteCardTheme>;
  unstyled?: Unstyled<FlowbiteCardTheme>;
}

export type CardProps = (
  | { imgAlt?: string; imgSrc?: string; renderImage?: never }
  | {
      /** Allows to provide a custom render function for the image component. Useful in Next.JS and Gatsby. **Setting this will disable `imgSrc` and `imgAlt`**.
       */
      renderImage?: (theme: DeepPartial<FlowbiteCardTheme>, horizontal: boolean) => JSX.Element;
      imgAlt?: never;
      imgSrc?: never;
    }
) &
  CommonCardProps;

export const Card: FC<CardProps> = (props) => {
  const { children, className, horizontal, href, theme: customTheme, unstyled } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);

  const theme = resolveTheme([cardTheme, getStore().theme?.card, customTheme], [unstyled]);

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

const Image: FC<CardProps> = ({ theme: customTheme, ...props }) => {
  const theme = resolveTheme([cardTheme, getStore().theme?.card, customTheme]);

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
  "unstyled",
]);
