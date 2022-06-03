import type { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import type { PositionInButtonGroup } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';
import type {
  FlowbiteColors,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteSizes,
} from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export interface ButtonComponentProps extends Omit<ComponentProps<'button'>, 'color'> {
  color?: keyof ButtonColors;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
}

export interface ButtonColors
  extends Pick<FlowbiteColors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
  [key: string]: string;
}

export interface ButtonGradientColors extends FlowbiteGradientColors {
  [key: string]: string;
}

export interface ButtonGradientDuoToneColors extends FlowbiteGradientDuoToneColors {
  [key: string]: string;
}

export interface ButtonOutlineColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

export interface ButtonSizes extends FlowbiteSizes {
  [key: string]: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  color = 'info',
  disabled = false,
  gradientDuoTone,
  gradientMonochrome,
  label,
  outline = false,
  pill = false,
  positionInGroup = 'none',
  size = 'md',
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const { buttonGroup: groupTheme, button: theme } = useTheme().theme;

  return (
    <button
      className={classNames(
        disabled && theme.disabled,
        !gradientDuoTone && !gradientMonochrome && theme.color[color],
        gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
        !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
        groupTheme.position[positionInGroup],
        outline && theme.outline.color[color],
        theme.base,
        theme.pill[pill ? 'on' : 'off'],
      )}
      disabled={disabled}
      type="button"
      {...theirProps}
    >
      <span
        className={classNames(
          theme.inner.base,
          theme.inner.position[positionInGroup],
          theme.outline[outline ? 'on' : 'off'],
          theme.outline.pill[outline && pill ? 'on' : 'off'],
          theme.size[size],
        )}
      >
        <>
          {typeof children !== 'undefined' && children}
          {typeof label !== 'undefined' && (
            <span className={theme.label} data-testid="flowbite-button-label">
              {label}
            </span>
          )}
        </>
      </span>
    </button>
  );
};

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
