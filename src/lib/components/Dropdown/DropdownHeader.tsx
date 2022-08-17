import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { DropdownDivider } from './DropdownDivider';

export const DropdownHeader: FC<PropsWithChildren<ComponentProps<'div'>>> = ({ children, ...props }): JSX.Element => {
  const theme = useTheme().theme.dropdown.floating.header;
  const theirProps = excludeClassName(props);

  return (
    <>
      <div className={theme} {...theirProps}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
