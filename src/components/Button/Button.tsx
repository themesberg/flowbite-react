import { forwardRef, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteSizes,
} from '../../';
import { Spinner, useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import { ButtonBase, type ButtonBaseProps } from './ButtonBase';
import type { PositionInButtonGroup } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';

export interface FlowbiteButtonTheme {
  base: string;
  fullSized: string;
  color: FlowbiteColors;
  disabled: string;
  isProcessing: string;
  spinnerSlot: string;
  spinnerLeftPosition: ButtonSizes;
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
  isProcessingPadding: ButtonSizes;
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

export interface ButtonProps extends ButtonBaseProps {
  color?: keyof FlowbiteColors;
  fullSized?: boolean;
  gradientDuoTone?: keyof ButtonGradientDuoToneColors;
  gradientMonochrome?: keyof ButtonGradientColors;
  target?: string;
  isProcessing?: boolean;
  processingLabel?: string;
  processingSpinner?: ReactNode;
  label?: ReactNode;
  outline?: boolean;
  pill?: boolean;
  positionInGroup?: keyof PositionInButtonGroup;
  size?: keyof ButtonSizes;
  theme?: DeepPartial<FlowbiteButtonTheme>;
}

interface Props extends ButtonProps, Record<string, unknown> {}

const ButtonComponent = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      children,
      className,
      color = 'info',
      disabled = false,
      fullSized,
      isProcessing = false,
      processingLabel = 'Loading...',
      processingSpinner,
      gradientDuoTone,
      gradientMonochrome,
      label,
      outline = false,
      pill = false,
      positionInGroup = 'none',
      size = 'md',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const { buttonGroup: groupTheme, button: buttonTheme } = useTheme().theme;
    const theme = mergeDeep(buttonTheme, customTheme);

    const theirProps = props as object;

    return (
      <ButtonBase
        disabled={disabled}
        ref={ref as never}
        className={twMerge(
          theme.base,
          disabled && theme.disabled,
          !gradientDuoTone && !gradientMonochrome && theme.color[color],
          gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone],
          !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome],
          outline && (theme.outline.color[color] ?? theme.outline.color.default),
          theme.pill[pill ? 'on' : 'off'],
          fullSized && theme.fullSized,
          groupTheme.position[positionInGroup],
          className,
        )}
        {...theirProps}
      >
        <span
          className={twMerge(
            theme.inner.base,
            theme.outline[outline ? 'on' : 'off'],
            theme.outline.pill[outline && pill ? 'on' : 'off'],
            theme.size[size],
            outline && !theme.outline.color[color] && theme.inner.outline,
            isProcessing && theme.isProcessing,
            isProcessing && theme.inner.isProcessingPadding[size],
            theme.inner.position[positionInGroup],
          )}
        >
          <>
            {isProcessing && (
              <span className={twMerge(theme.spinnerSlot, theme.spinnerLeftPosition[size])}>
                {processingSpinner || <Spinner size={size} />}
              </span>
            )}
            {typeof children !== 'undefined' ? (
              children
            ) : (
              <span data-testid="flowbite-button-label" className={twMerge(theme.label)}>
                {isProcessing ? processingLabel : label}
              </span>
            )}
          </>
        </span>
      </ButtonBase>
    );
  },
);
ButtonComponent.displayName = 'ButtonComponent';

export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
