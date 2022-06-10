import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, useMemo } from 'react';
import type { ButtonProps } from '.';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type ButtonGroupProps = PropsWithChildren<ComponentProps<'div'> & Pick<ButtonProps, 'outline' | 'pill'>>;

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
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          pill,
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children, outline, pill],
  );
  const theme = useTheme().theme.buttonGroup;

  return (
    <div className={theme.base} role="group" {...theirProps}>
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
