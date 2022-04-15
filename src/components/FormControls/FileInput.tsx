import { FC } from 'react';
import classNames from 'classnames';

import { TextInput, TextInputProps } from './TextInput';

export type FileInputProps = Omit<TextInputProps, 'type'>;

export const FileInput: FC<FileInputProps> = ({ className, ...props }) => {
  return <TextInput className={classNames('!p-0', className)} {...props} type="file" />;
};
