import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useNavbarContext } from './NavbarContext';

export const NavbarCollapse: FC<PropsWithChildren<any>> = ({ children }) => {
  const { isOpen } = useNavbarContext();
  return (
    <div className={classNames('w-full md:block md:w-auto', { hidden: !isOpen })} data-testid="navbar-collapse">
      <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">{children}</ul>
    </div>
  );
};
