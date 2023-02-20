import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFooterTitleTheme {
  base: string;
}

export interface FooterTitleProps extends PropsWithChildren<ComponentProps<'h2'>> {
  theme?: DeepPartial<FlowbiteFooterTitleTheme>;
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({ className, theme: customTheme = {}, title }) => {
  const theme = mergeDeep(useTheme().theme.footer.title, customTheme);

  return (
    <h2 data-testid="flowbite-footer-title" className={classNames(theme.base, className)}>
      {title}
    </h2>
  );
};
