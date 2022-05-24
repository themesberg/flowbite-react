import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';

export interface AvatarProps extends PropsWithChildren<ComponentProps<'div'>> {
  alt?: string;
  bordered?: boolean;
  img?: string;
  rounded?: boolean;
  size?: keyof FlowbiteSizes;
  stacked?: boolean;
  status?: 'away' | 'busy' | 'offline' | 'online';
  statusPosition?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  img,
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  statusPosition = 'top-left',
  ...props
}) => {
  const theme = useTheme().theme.avatar;

  return (
    <div className={theme.base} data-testid="avatar-element" {...props}>
      <div className="relative">
        {img ? (
          <img
            alt={alt}
            className={classNames(
              bordered && theme.bordered,
              rounded && theme.rounded,
              stacked && theme.stacked,
              theme.img.enabled,
              theme.size[size],
            )}
            src={img}
          />
        ) : (
          <div
            className={classNames(
              bordered && theme.bordered,
              rounded && theme.rounded,
              stacked && theme.stacked,
              theme.img.disabled,
              theme.size[size],
            )}
          >
            <svg
              className="absolute -bottom-1 h-auto w-auto text-gray-400"
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
