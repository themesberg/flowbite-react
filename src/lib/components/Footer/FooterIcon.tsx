import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterIconProps extends PropsWithChildren<ComponentProps<'a'>> {
  ariaLabel?: string;
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
}

export const FooterIcon: FC<FooterIconProps> = ({ href, className, ariaLabel, icon: Icon }) => {
  const theme = useTheme().theme.footer.icon;

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
