import { FC } from 'react';
import { useNavbarContext } from './NavbarContext';

export const NavbarCollapse: FC = ({ children }) => {
  const { isOpen } = useNavbarContext();
  return <div className={isOpen ? 'w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'}>{children}</div>;
};
