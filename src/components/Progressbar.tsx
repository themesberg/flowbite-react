import { FC, PropsWithChildren } from 'react';

export type ProgressbarProps = PropsWithChildren<{
  progress?: string | '10%' | '20%' | '30%' | '40%' | '50%' | '60%' | '70%' | '80%' | '90%' | '100%';
}>;

export const Progressbar: FC<ProgressbarProps> = ({ progress }) => {
  return (
    <>
      <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
        <div className="h-2.5 rounded-full bg-blue-600" style={{ width: progress }}></div>
      </div>
    </>
  );
};
