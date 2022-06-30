import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterIconProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
  ariaLabel?: string;
}

export const FooterIcon: FC<FooterIconProps> = ({ href, ariaLabel, icon: Icon }) => {
  const theme = useTheme().theme.footer.icon;
  return (
    <div data-testid="footer-icon">
      {href ? (
        <a href={href} aria-label={ariaLabel} className={theme.base}>
          <Icon className={theme.size} />
        </a>
      ) : (
        <Icon className={theme.size} />
      )}
    </div>
  );
};
