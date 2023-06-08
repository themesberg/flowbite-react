import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../../';
import { useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteFooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends PropsWithChildren, ComponentProps<'div'> {
  by: string;
  href?: string;
  theme?: DeepPartial<FlowbiteFooterCopyrightTheme>;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({
  by,
  className,
  href,
  theme: customTheme = {},
  year,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.footer.copyright, customTheme);

  return (
    <div data-testid="flowbite-footer-copyright" className={twMerge(theme.base, className)} {...props}>
      © {year}
      {href ? (
        <a href={href} className={theme.href}>
          {by}
        </a>
      ) : (
        <span data-testid="flowbite-footer-copyright-span" className={theme.span}>
          {by}
        </span>
      )}
    </div>
  );
};
