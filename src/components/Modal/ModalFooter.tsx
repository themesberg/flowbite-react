import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalFooterTheme {
  base: string;
  popup: string;
}

export interface ModalFooterProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteModalFooterTheme>;
}

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.modal.footer, customTheme);
  const { popup } = useModalContext();

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: !popup,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
