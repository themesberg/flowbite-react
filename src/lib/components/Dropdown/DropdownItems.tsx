import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';

export const DropdownItems: FC<ComponentProps<'div'>> = ({ children, className }) => {
  const theme = useTheme().theme.dropdown.floating;
  return (
    <Floating.Content>
      <div className={classNames(theme.base, className)}>
        <ul>{children}</ul>
      </div>
    </Floating.Content>
  );
};
