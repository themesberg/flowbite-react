import classNames from 'classnames';
import type { FC } from 'react';
import type { TextInputProps } from './TextInput';
import { TextInput } from './TextInput';

export type FileInputProps = Omit<TextInputProps, 'type'>;

export const FileInput: FC<FileInputProps> = ({ className, ...props }) => {
  return <TextInput className={classNames('!p-0', className)} {...props} type="file" />;
};
