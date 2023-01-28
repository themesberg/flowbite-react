import classNames from 'classnames';
import { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react';
import { useKeyDown } from '../../hooks';
import type { FlowbiteBoolean, FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';
import { ModalPortal } from './ModalPortal';

export interface FlowbiteModalTheme {
  base: string;
  show: FlowbiteBoolean;
  content: {
    base: string;
    inner: string;
  };
  body: {
    base: string;
    popup: string;
  };
  header: {
    base: string;
    popup: string;
    title: string;
    close: {
      base: string;
      icon: string;
    };
  };
  footer: {
    base: string;
    popup: string;
  };
  sizes: ModalSizes;
  positions: ModalPositions;
}

export interface ModalPositions extends FlowbitePositions {
  [key: string]: string;
}

export interface ModalSizes extends Omit<FlowbiteSizes, 'xs'> {
  [key: string]: string;
}

export interface ModalContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  position?: keyof ModalPositions;
  root?: HTMLElement;
  size?: keyof ModalSizes;
  dismissible?: boolean;
}

export const ModalContent: FC<ModalContentProps> = ({
  children,
  root,
  size = '2xl',
  position = 'center',
  dismissible = false,
  className,
  ...props
}) => {
  const { isOpen, close } = useModalContext();
  const theme = useTheme().theme.modal;

  useKeyDown('Escape', () => {
    if (dismissible) {
      close();
    }
  });

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget) {
      close();
    }
  };

  return (
    <ModalPortal root={root}>
      <div
        aria-hidden={!isOpen}
        className={classNames(
          theme.base,
          theme.positions[position],
          isOpen ? theme.show.on : theme.show.off,
          className,
        )}
        data-testid="modal"
        role="dialog"
        onClick={handleOnClick}
        {...props}
      >
        <div className={classNames(theme.content.base, theme.sizes[size])}>
          <div className={theme.content.inner}>{children}</div>
        </div>
      </div>
    </ModalPortal>
  );
};
