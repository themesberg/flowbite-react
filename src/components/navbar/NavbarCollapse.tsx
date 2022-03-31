import { FC } from 'react';
import classNames from 'classnames';
import { useNavbarContext } from './NavbarContext';

export const NavbarCollapse: FC = ({ children }) => {
  const { isOpen } = useNavbarContext();
  return <div className={classNames('w-full md:block md:w-auto', { hidden: !isOpen })}>{children}</div>;
};
