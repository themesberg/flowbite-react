import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';

export interface NavbarToggleProps extends ComponentProps<'button'> {
  barIcon?: FC<ComponentProps<'svg'>>;
}

export const NavbarToggle: FC<NavbarToggleProps> = ({ barIcon: BarIcon = GoThreeBars, className, ...props }) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const theme = useTheme().theme.navbar.toggle;

  return (
    <button
      className={classNames(theme.base, className)}
      data-testid="flowbite-navbar-toggle"
      onClick={handleClick}
      {...props}
    >
      <span className="sr-only">Open main menu</span>
      <BarIcon className={theme.icon} />
    </button>
  );
};
