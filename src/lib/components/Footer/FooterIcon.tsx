import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterIconProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
  ariaLabel?: string;
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
}

export const FooterIcon: FC<FooterIconProps> = ({ href, ariaLabel, icon: Icon }) => {
  const theme = useTheme().theme.footer.icon;

  return (
    <div>
      {href ? (
        <a aria-label={ariaLabel} data-testid="flowbite-footer-icon" href={href} className={theme.base}>
          <Icon className={theme.size} />
        </a>
      ) : (
        <Icon data-testid="flowbite-footer-icon" className={theme.size} />
      )}
    </div>
  );
};
