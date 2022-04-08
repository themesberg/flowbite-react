import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useMemo } from 'react';

import { ButtonProps } from './Button';

export type ButtonGroupProps = PropsWithChildren<{
  pill?: boolean;
  outline?: boolean;
}>;

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, pill, outline }) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          pill,
          outline,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, outline, pill],
  );

  return (
    <div className="inline-flex" role="group">
      {items}
    </div>
  );
};
