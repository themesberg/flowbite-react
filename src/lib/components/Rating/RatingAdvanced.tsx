import { FC, PropsWithChildren } from 'react';

export type RatingAdvancedProps = PropsWithChildren<{
  percentFilled?: string;
}>;

export const RatingAdvanced: FC<RatingAdvancedProps> = ({ percentFilled, children }) => {
  return (
    <div className="flex items-center">
      <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{children}</span>
      <div className="mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700">
        <div className="h-5 rounded bg-yellow-400" style={{ width: percentFilled }} />
      </div>
      <span className="text-sm font-medium text-blue-600 dark:text-blue-500">{percentFilled}</span>
    </div>
  );
};
