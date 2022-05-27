import { Children, cloneElement, ComponentProps, FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { excludeClassName } from '../../helpers/exclude';

import { ButtonComponentProps } from '.';

export type ButtonGroupProps = PropsWithChildren<
  ComponentProps<'div'> & Pick<ButtonComponentProps, 'outline' | 'pill'>
>;

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children, outline, pill, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonComponentProps>[], (child, index) =>
        cloneElement(child, {
          pill,
          outline,
          positionInGroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonComponentProps>[]).length - 1
              ? 'end'
              : 'middle',
        }),
      ),
    [children, outline, pill],
  );

  return (
    <div className="inline-flex" role="group" {...theirProps}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
