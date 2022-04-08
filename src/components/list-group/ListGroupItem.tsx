import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type ListGroupItemProps = PropsWithChildren<{
  className?: string;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}>;

export const ListGroupItem: FC<ListGroupItemProps> = ({ children, className, href, onClick, active, icon: Icon }) => {
  const Wrapper = ({ children, className }: PropsWithChildren<{ className?: string }>) =>
    !href ? (
      <button className={classNames('text-left', className)} onClick={onClick} type="button">
        {children}
      </button>
    ) : (
      <a className={className} href={href}>
        {children}
      </a>
    );

  return (
    <Wrapper
      className={classNames(
        'flex w-full cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600',
        {
          'bg-blue-700 text-white dark:bg-gray-800': active,
          'hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500':
            !active,
        },
        className,
      )}
    >
      {Icon && <Icon className="mr-2 h-4 w-4 fill-current" />}
      {children}
    </Wrapper>
  );
};
