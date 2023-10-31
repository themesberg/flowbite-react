import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { FlowbiteStateColors } from '../..';
import type { DeepPartial } from '../../types';
import { getTheme } from '../../theme-store';
import { mergeDeep } from '../../helpers/merge-deep';
import { ListItem } from './ListItem';

export interface FlowbiteListTheme {
  root: FlowbiteListRootTheme;
}

export interface FlowbiteListRootTheme {
  base: string;
  ordered: {
    on: string;
    off: string;
  }
  unStyled: string;
}

export interface ListColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface ListProps extends PropsWithChildren<ComponentProps<'ul'> & ComponentProps<'ol'>> {
  theme?: DeepPartial<FlowbiteListTheme>;
  ordered?: boolean
  unStyled?: boolean
}

const ListComponent: FC<ListProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list, customTheme);
  const Component = props.ordered ? "ol" : "ul"

  return (
    <Component className={twMerge(
      theme.root.ordered[props.ordered ? 'on' : 'off'],
      props.unStyled && theme.root.unStyled,
      theme.root.base,
      className
    )}
      {...props}>
      {children}
    </Component>
  );
};

ListComponent.displayName = 'List';
ListItem.displayName = 'List.Item';

export const List = Object.assign(ListComponent, { Item: ListItem });
