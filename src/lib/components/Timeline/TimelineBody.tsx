import { FC, PropsWithChildren, ComponentProps } from 'react';

export type TimelineBodyProps = PropsWithChildren<ComponentProps<'p'>>;

export const TimelineBody: FC<TimelineBodyProps> = ({ children, ...props }) => {
  return (
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" {...props}>
      {children}
    </p>
  );
};
