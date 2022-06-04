import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TableBodyProps = PropsWithChildren<ComponentProps<'tbody'>>;

export const TableBody: FC<TableBodyProps> = ({ children, ...props }) => {
  return <tbody {...props}>{children}</tbody>;
};
