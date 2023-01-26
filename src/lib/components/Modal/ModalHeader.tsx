import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';

export interface FlowbiteModalHeaderTheme {
  base: string;
  popup: string;
  title: string;
  close: {
    base: string;
    icon: string;
  };
}

export interface ModalHeaderProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteModalHeaderTheme>;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.modal.header, customTheme);
  const { popup, onClose } = useModalContext();

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: popup,
        },
        className,
      )}
      {...props}
    >
      <h3 className={theme.title}>{children}</h3>
      <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
        <HiOutlineX aria-hidden className={theme.close.icon} />
      </button>
    </div>
  );
};
