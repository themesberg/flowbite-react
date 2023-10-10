import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '~/src/types';

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends PropsWithChildren<ComponentProps<'h2'>> {
  as?: ElementType;
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({
  as: Component = 'h2',
  className,
  theme: customTheme = {},
  title,
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.title, customTheme);

  return (
    <Component data-testid="flowbite-footer-title" className={twMerge(theme.base, className)} {...props}>
      {title}
    </Component>
  );
};
