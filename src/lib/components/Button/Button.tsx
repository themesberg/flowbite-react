import classNames from 'classnames';
import type { ElementType, Ref } from 'react';
import { type ReactNode } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { forwardRefWithAs, Props, RenderAs } from '../../helpers/renderAs';
import type {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteSizes,
} from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { PositionInButtonGroup } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';

export interface FlowbiteButtonTheme {
  base: string;
  fullSized: string;
  color: FlowbiteColors;
  disabled: string;
  gradient: ButtonGradientColors;
  gradientDuoTone: ButtonGradientDuoToneColors;
  inner: FlowbiteButtonInnerTheme;
  label: string;
  outline: FlowbiteButtonOutlineTheme;
  pill: FlowbiteBoolean;
  size: ButtonSizes;
}

export interface FlowbiteButtonInnerTheme {
  base: string;
  position: PositionInButtonGroup;
  outline: string;
}

export interface FlowbiteButtonOutlineTheme extends FlowbiteBoolean {
  color: ButtonOutlineColors;
  pill: FlowbiteBoolean;
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

export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string;
}

export interface ButtonProps {
  color?: keyof FlowbiteColors;
  fullSized?: boolean;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  href?: string;
  target?: string;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
  theme?: DeepPartial<FlowbiteButtonTheme>;
}

const DefaultTag = 'button';

const ButtonComponent = forwardRefWithAs(function Button<TTag extends ElementType = typeof DefaultTag>(
  {
    children,
    color = 'info',
    disabled = false,
    fullSized,
    gradientDuoTone,
    gradientMonochrome,
    label,
    outline = false,
    pill = false,
    positionInGroup = 'none',
    size = 'md',
    theme: customTheme = {},
    ...props
  }: Props<TTag> & ButtonProps,
  ref: Ref<HTMLElement>,
) {
  const { buttonGroup: groupTheme, button: theme } = mergeDeep(useTheme().theme, customTheme);

  if (props.href && !props.as) {
    // No idea why this needs to be casted to any
    (props as any).as = 'a';
  }

  if (props.as === 'button' || !props.as) (props as any).type = props.type ?? 'button';

  return (
    <RenderAs
      disabled={disabled}
      ref={ref as never}
      passedProps={props}
      defaultTag={DefaultTag}
      className={classNames(
        disabled && theme.disabled,
        !gradientDuoTone && !gradientMonochrome && theme.color[color],
        gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
        !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
        groupTheme.position[positionInGroup],
        outline && (theme.outline.color[color] ?? theme.outline.color.default),
        theme.base,
        theme.pill[pill ? 'on' : 'off'],
        fullSized && theme.fullSized,
      )}
    >
      <span
        className={classNames(
          theme.inner.base,
          theme.inner.position[positionInGroup],
          theme.outline[outline ? 'on' : 'off'],
          theme.outline.pill[outline && pill ? 'on' : 'off'],
          theme.size[size],
          outline && !theme.outline.color[color] && theme.inner.outline,
        )}
      >
        <>
          {typeof children !== 'undefined' && children}
          {typeof label !== 'undefined' && (
            <span data-testid="flowbite-button-label" className={theme.label}>
              {label}
            </span>
          )}
        </>
      </span>
    </RenderAs>
  );
});

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
