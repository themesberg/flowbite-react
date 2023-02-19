import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteAlertTheme {
  base: string;
  borderAccent: string;
  closeButton: FlowbiteAlertCloseButtonTheme;
  color: AlertColors;
  icon: string;
  rounded: string;
  wrapper: string;
}

export interface FlowbiteAlertCloseButtonTheme {
  base: string;
  color: AlertColors;
  icon: string;
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
  theme?: DeepPartial<FlowbiteAlertTheme>;
  withBorderAccent?: boolean;
}

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  className,
  color = 'info',
  icon: Icon,
  onDismiss,
  rounded = true,
  theme: customTheme = {},
  withBorderAccent,
}) => {
  const theme = mergeDeep(useTheme().theme.alert, customTheme);

  return (
    <div
      className={classNames(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
        className,
      )}
      role="alert"
    >
      <div className={theme.wrapper} data-testid="flowbite-alert-wrapper">
        {Icon && <Icon className={theme.icon} data-testid="flowbite-alert-icon" />}
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
