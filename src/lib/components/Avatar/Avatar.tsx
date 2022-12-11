import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import type { FlowbiteColors, FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';

export interface FlowbiteAvatarTheme {
  base: string;
  bordered: string;
  img: {
    off: string;
    on: string;
    placeholder: string;
  };
  color: AvatarColors;
  rounded: string;
  size: AvatarSizes;
  stacked: string;
  status: {
    away: string;
    base: string;
    busy: string;
    offline: string;
    online: string;
  };
  statusPosition: FlowbitePositions;
  initials: {
    base: string;
    text: string;
  };
}

export interface AvatarColors
  extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface AvatarSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface AvatarImageProps {
  alt?: string;
  className: string;
  'data-testid': string;
}

export interface AvatarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  alt?: string;
  bordered?: boolean;
  img?: string | ((props: AvatarImageProps) => ReactElement);
  color?: keyof AvatarColors;
  rounded?: boolean;
  size?: keyof AvatarSizes;
  stacked?: boolean;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: keyof FlowbitePositions;
  placeholderInitials?: string;
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  img,
  color = 'light',
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  statusPosition = 'top-left',
  placeholderInitials = '',
  className,
  ...props
}) => {
  const theme = useTheme().theme.avatar;
  const imgClassName = classNames(
    bordered && theme.bordered,
    bordered && theme.color[color],
    rounded && theme.rounded,
    stacked && theme.stacked,
    theme.img.on,
    theme.size[size],
  );

  const imgProps = { alt, className: classNames(imgClassName, theme.img.on), 'data-testid': 'flowbite-avatar-img' };
  return (
    <div className={classNames(theme.base, className)} data-testid="flowbite-avatar" {...props}>
      <div className="relative">
        {img ? (
          typeof img === 'string' ? (
            <img {...imgProps} src={img} />
          ) : (
            img(imgProps)
          )
        ) : placeholderInitials ? (
          <div
            className={classNames(
              theme.img.off,
              theme.initials.base,
              rounded && theme.rounded,
              stacked && theme.stacked,
              bordered && theme.bordered,
            )}
          >
            <span className={classNames(theme.initials.text)} data-testid="flowbite-avatar-initials-placeholder">
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={classNames(imgClassName, theme.img.off)} data-testid="flowbite-avatar-img">
            <svg
              className={theme.img.placeholder}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {status && (
          <span className={classNames(theme.status.base, theme.status[status], theme.statusPosition[statusPosition])} />
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter,
});
