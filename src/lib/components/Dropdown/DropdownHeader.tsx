import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { DropdownDivider } from './DropdownDivider';

export const DropdownHeader: FC<PropsWithChildren<ComponentProps<'div'>>> = ({ children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  return (
    <>
      <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200" {...theirProps}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
