import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFooterIconTheme {
  base: string;
  size: string;
}

export interface FooterIconProps extends PropsWithChildren<ComponentProps<'a'>> {
  ariaLabel?: string;
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteFooterIconTheme>;
}

export const FooterIcon: FC<FooterIconProps> = ({
  ariaLabel,
  className,
  href,
  icon: Icon,
  theme: customTheme = {},
}) => {
  const theme = mergeDeep(useTheme().theme.footer.icon, customTheme);

  return (
    <div>
      {href ? (
        <a
          aria-label={ariaLabel}
          data-testid="flowbite-footer-icon"
          href={href}
          className={classNames(theme.base, className)}
        >
          <Icon className={theme.size} />
        </a>
      ) : (
        <Icon data-testid="flowbite-footer-icon" className={theme.size} />
      )}
    </div>
  );
};
