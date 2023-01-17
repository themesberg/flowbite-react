import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteAlertTheme {
  root: FlowbiteAlertRootTheme;
  closeButton: FlowbiteAlertCloseButtonTheme;
}

export interface FlowbiteAlertRootTheme {
  base: string;
  borderAccent: string;
  wrapper: string;
  color: AlertColors;
  icon: string;
  rounded: string;
}

export interface FlowbiteAlertCloseButtonTheme {
  base: string;
  icon: string;
  color: AlertColors;
}

export interface AlertColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  additionalContent?: ReactNode;
  color?: keyof AlertColors;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: boolean | (() => void);
  rounded?: boolean;
  withBorderAccent?: boolean;
  theme?: DeepPartial<FlowbiteAlertTheme>;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  color = 'info',
  icon: Icon,
  onDismiss,
  rounded = true,
  withBorderAccent,
  className,
  theme: customTheme = {},
}) => {
  const theme = mergeDeep(useTheme().theme.alert, customTheme);

  return (
    <div
      className={classNames(
        theme.root.base,
        theme.root.color[color],
        rounded && theme.root.rounded,
        withBorderAccent && theme.root.borderAccent,
        className,
      )}
      role="alert"
    >
      <div className={theme.root.wrapper}>
        {Icon && <Icon className={theme.root.icon} />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Dismiss"
            className={classNames(theme.closeButton.base, theme.closeButton.color[color])}
            onClick={onDismiss}
            type="button"
          >
            <HiX aria-hidden className={theme.closeButton.icon} />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
