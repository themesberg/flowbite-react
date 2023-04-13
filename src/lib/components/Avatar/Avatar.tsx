import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean, FlowbiteColors, FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteAvatarGroupTheme } from './AvatarGroup';
import AvatarGroup from './AvatarGroup';
import type { FlowbiteAvatarGroupCounterTheme } from './AvatarGroupCounter';
import AvatarGroupCounter from './AvatarGroupCounter';

export interface FlowbiteAvatarTheme {
  root: FlowbiteAvatarRootTheme;
  group: FlowbiteAvatarGroupTheme;
  groupCounter: FlowbiteAvatarGroupCounterTheme;
}

export interface FlowbiteAvatarRootTheme {
  base: string;
  bordered: string;
  color: AvatarColors;
  img: FlowbiteAvatarImageTheme;
  initials: FlowbiteAvatarInitialsTheme;
  rounded: string;
  size: AvatarSizes;
  stacked: string;
  status: FlowbiteAvatarStatusTheme;
  statusPosition: FlowbitePositions;
}

export interface FlowbiteAvatarImageTheme extends FlowbiteBoolean {
  placeholder: string;
}

export interface FlowbiteAvatarStatusTheme {
  away: string;
  base: string;
  busy: string;
  offline: string;
  online: string;
}

export interface FlowbiteAvatarInitialsTheme {
  base: string;
  text: string;
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
  theme?: DeepPartial<FlowbiteAvatarTheme>;
}

const AvatarComponent: FC<AvatarProps> = ({
  alt = '',
  bordered = false,
  children,
  className,
  color = 'light',
  img,
  placeholderInitials = '',
  rounded = false,
  size = 'md',
  stacked = false,
  status,
  statusPosition = 'top-left',
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.avatar, customTheme);

  const imgClassName = classNames(
    bordered && theme.root.bordered,
    bordered && theme.root.color[color],
    rounded && theme.root.rounded,
    stacked && theme.root.stacked,
    theme.root.img.on,
    theme.root.size[size],
  );

  const imgProps = {
    alt,
    className: classNames(imgClassName, theme.root.img.on),
    'data-testid': 'flowbite-avatar-img',
  };
  return (
    <div className={classNames(theme.root.base, className)} data-testid="flowbite-avatar" {...props}>
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
              theme.root.img.off,
              theme.root.initials.base,
              rounded && theme.root.rounded,
              stacked && theme.root.stacked,
              bordered && theme.root.bordered,
              bordered && theme.root.color[color],
              theme.root.size[size],
            )}
            data-testid="flowbite-avatar-initials-placeholder"
          >
            <span
              className={classNames(theme.root.initials.text)}
              data-testid="flowbite-avatar-initials-placeholder-text"
            >
              {placeholderInitials}
            </span>
          </div>
        ) : (
          <div className={classNames(imgClassName, theme.root.img.off)} data-testid="flowbite-avatar-img">
            <svg
              className={theme.root.img.placeholder}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        {status && (
          <span
            data-testid="flowbite-avatar-status"
            className={classNames(
              theme.root.status.base,
              theme.root.status[status],
              theme.root.statusPosition[statusPosition],
            )}
          />
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
