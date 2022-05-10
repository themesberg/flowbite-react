import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type BadgeColor = 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'indigo' | 'purple' | 'pink';

export type BadgeProps = PropsWithChildren<{
  color?: BadgeColor;
  size?: 'xs' | 'sm';
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
}>;

const colorClasses: Record<BadgeProps['color'] & string, string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
  red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
  green:
    'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
  yellow:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
  indigo:
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
  purple:
    'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
};

const sizeClasses: Record<BadgeProps['size'] & string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
};

const iconSizeClasses: Record<BadgeProps['size'] & string, string> = {
  xs: 'w-3 h-3',
  sm: 'w-3.5 h-3.5',
};

export const Badge: FC<BadgeProps> = ({ children, color = 'blue', size = 'xs', href, icon: Icon }) => {
  const span = (
    <>
      <span
        className={classNames('flex h-fit items-center gap-1 font-semibold', colorClasses[color], sizeClasses[size], {
          'rounded px-2 py-0.5': !!children,
          'rounded-full p-1': !children && size === 'xs',
          'rounded-full p-1.5': !children && size === 'sm',
        })}
      >
        {Icon && <Icon className={classNames(iconSizeClasses[size])} />}
        {children && <span>{children}</span>}
      </span>
    </>
  );

  return href ? (
    <a className="group" data-testid="badge-link" href={href}>
      {span}
    </a>
  ) : (
    span
  );
};
