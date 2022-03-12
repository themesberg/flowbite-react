import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { Spinner } from './Spinner';

type Color = 'blue' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple';
type GradientMonochrome = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';
type GradientDuoTone =
  | 'purpleToBlue'
  | 'cyanToBlue'
  | 'greenToBlue'
  | 'purpleToPink'
  | 'pinkToOrange'
  | 'tealToLime'
  | 'redToYellow';
type Size = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
type IconPosition = 'left' | 'right';
export type ButtonProps = ComponentProps<'button'> & {
  pill?: boolean;
  outline?: boolean;
  disabled?: boolean;
  loader?: boolean;
  iconButton?: boolean;
  label?: string;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  iconPosition?: IconPosition;
  gradientMonochrome?: GradientMonochrome;
  gradientDuoTone?: GradientDuoTone;
};

const colorClasses: Record<Color, string> = {
  blue: 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  alternative:
    'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',
  light:
    'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800',
  green:
    'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  yellow: 'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
  purple:
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
};

const gradientMonochromeClasses: Record<GradientMonochrome, string> = {
  blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 ',
  green:
    'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
  cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
  teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
  lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
  red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
  pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
  purple:
    'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
};

const gradientDuoToneClasses: Record<GradientDuoTone, string> = {
  purpleToBlue:
    'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800',
  cyanToBlue:
    'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
  greenToBlue:
    'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
  purpleToPink:
    'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
  pinkToOrange:
    'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
  tealToLime:
    'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:!text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
  redToYellow:
    'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
};

const sizeClasses: Record<Size, string> = {
  extraSmall: 'text-xs px-3 py-2',
  small: 'text-sm px-3 py-2',
  medium: 'text-sm px-5 py-2.5',
  large: 'text-base px-5 py-3',
  extraLarge: 'text-base px-6 py-3.5',
};

export const Button: FC<ButtonProps> = ({
  children,
  pill,
  outline,
  disabled = false,
  loader = false,
  iconButton = false,
  label,
  size = 'medium',
  icon: Icon,
  iconPosition,
  color = 'blue',
  gradientMonochrome,
  gradientDuoTone,
  ...props
}) => {
  return (
    <button
      disabled={loader || disabled}
      className={classNames(
        'flex h-min items-center justify-center p-0.5 text-center font-medium group',
        pill ? 'rounded-full' : 'rounded-lg',
        !gradientMonochrome && !gradientDuoTone && colorClasses[color],
        !gradientDuoTone && gradientMonochrome && gradientMonochromeClasses[gradientMonochrome],
        gradientDuoTone && gradientDuoToneClasses[gradientDuoTone],
        {
          'bg-blue-400 dark:bg-blue-500 hover:bg-blue-400 dark:hover:bg-blue-400 cursor-not-allowed': disabled,
        },
      )}
      type="button"
      {...props}
    >
      <span
        className={classNames('flex', size && sizeClasses[size], {
          'text-gray-900 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 group-hover:text-inherit dark:text-white':
            outline,
          'rounded-md': outline && !pill,
          'rounded-full': outline && pill,
          'text-sm px-2.5': iconButton,
          'gap-2': loader,
        })}
      >
        {loader && <Spinner size="xs" />}

        {iconPosition === 'left' && Icon && <Icon className="mr-1.5 w-5 h-5" />}
        {children}
        {iconPosition === 'right' && Icon && <Icon className="ml-1.5 w-5 h-5" />}
        {iconButton && Icon && <Icon className="w-5 h-5" />}
      </span>

      {label && (
        <span
          className={classNames({
            'inline-flex justify-center items-center mr-4 -ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full':
              !!label,
          })}
        >
          {label}
        </span>
      )}
    </button>
  );
};
