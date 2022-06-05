import { FC, PropsWithChildren, ComponentProps } from 'react';

import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterIconProps extends PropsWithChildren<ComponentProps<'a'>> {
  href?: string;
  icon: FC<ComponentProps<'svg'>>;
  ariaLabel?: string;
}

export const FooterIcon: FC<FooterIconProps> = ({ href, ariaLabel, icon: Icon }) => {
  const theme = useTheme().theme.footer.icon;

  return (
    <>
      {href ? (
        <a href={href} aria-label={ariaLabel} className={theme.base}>
          <Icon className={theme.size} />
        </a>
      ) : (
        <Icon className={theme.size} />
      )}
    </>
  );
};
