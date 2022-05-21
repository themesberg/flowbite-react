import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { HiX } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { Colors } from '../Flowbite/FlowbiteTheme';

export type AlertProps = PropsWithChildren<{
  additionalContent?: ReactNode;
  color?: keyof Colors;
  icon?: FC<ComponentProps<'svg'>>;
  onDismiss?: boolean | (() => void);
  rounded?: boolean;
  withBorderAccent?: boolean;
}>;

export const Alert: FC<AlertProps> = ({
  additionalContent,
  children,
  color = 'info',
  icon: Icon,
  onDismiss,
  rounded = true,
  withBorderAccent,
}) => {
  const theme = useTheme().theme.alert;

  return (
    <div
      className={classNames(
        theme.base,
        theme.color[color],
        rounded && theme.rounded,
        withBorderAccent && theme.borderAccent,
      )}
      role="alert"
    >
      <div className="flex items-center">
        {Icon && <Icon className={theme.icon} />}
        <div>{children}</div>
        {typeof onDismiss === 'function' && (
          <button
            aria-label="Close"
            className={classNames(theme.closeButton.base, theme.closeButton.color[color])}
            data-testid="alert-dismiss"
            onClick={onDismiss}
            type="button"
          >
            <span className="sr-only">Close</span>
            <HiX className="h-5 w-5" />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
