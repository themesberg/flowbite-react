import { FC, PropsWithChildren, ComponentProps } from 'react';

export type TimelineTitleProps = PropsWithChildren<ComponentProps<'h3'>>;

export const TimelineTitle: FC<TimelineTitleProps> = ({ children, ...props }) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white" {...props}>
      {children}
    </h3>
  );
};
