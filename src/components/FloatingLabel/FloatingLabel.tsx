import type { ComponentProps, FC, ReactNode } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../../';
import { HelperText, useTheme } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteFloatingLabelTheme {
    base: string;
    addon: string;
    field: {
        base: string;
        icon: {
            base: string;
            svg: string;
        };
        rightIcon: {
            base: string;
            svg: string;
        };
        input: {
            base: string;
            sizes: FlowbiteFloatingLabelSizes;
            colors: FlowbiteFloatingLabelColors;
            withIcon: FlowbiteBoolean;
            withRightIcon: FlowbiteBoolean;
            withAddon: FlowbiteBoolean;
            withShadow: FlowbiteBoolean;
        };
    };
}

export interface FlowbiteFloatingLabelColors
    extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}

export interface FloatingLabelProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
    addon?: ReactNode;
    color?: keyof FlowbiteFloatingLabelColors;
    helperText?: ReactNode;
    icon?: FC<ComponentProps<'svg'>>;
    rightIcon?: FC<ComponentProps<'svg'>>;
    shadow?: boolean;
    sizing?: keyof FlowbiteFloatingLabelSizes;
    theme?: DeepPartial<FlowbiteFloatingLabelTheme>;
    placeholder?: string;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
    (
        {
            addon,
            className,
            color = 'gray',
            helperText,
            icon: Icon,
            rightIcon: RightIcon,
            shadow,
            sizing = 'md',
            theme: customTheme = {},
            placeholder,
            ...props
        },
        ref,
    ) => {
        const theme = mergeDeep(useTheme().theme.textInput, customTheme);

        return (
            <>
                <div className={twMerge(theme.base, className, "relative")}>
                    {addon && <span className={theme.addon}>{addon}</span>}
                    <div className={theme.field.base}>
                        {Icon && (
                            <div className={theme.field.icon.base}>
                                <Icon className={theme.field.icon.svg} />
                            </div>
                        )}
                        {RightIcon && (
                            <div data-testid="right-icon" className={theme.field.rightIcon.base}>
                                <RightIcon className={theme.field.rightIcon.svg} />
                            </div>
                        )}
                        <input
                            id="filled_success"
                            className={twMerge(
                                theme.field.input.base,
                                theme.field.input.colors[color],
                                theme.field.input.sizes[sizing],
                                theme.field.input.withIcon[Icon ? 'on' : 'off'],
                                theme.field.input.withRightIcon[RightIcon ? 'on' : 'off'],
                                theme.field.input.withAddon[addon ? 'on' : 'off'],
                                theme.field.input.withShadow[shadow ? 'on' : 'off'],
                            )}
                            {...props}
                            ref={ref}
                        />
                        {
                            placeholder  && (
                                <label htmlFor="filled_success"
                                       className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                    {placeholder}
                                </label>
                            )
                        }
                    </div>

                </div>
                {helperText && <HelperText color={color}>{helperText}</HelperText>}

                <div className="grid items-end gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <div className="relative">
                            <input type="text" id="filled_success1" aria-describedby="filled_success_help" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                            <label htmlFor="filled_success1" className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Filled success</label>
                        </div>
                    </div>
                </div>
            </>
        );
    },
);

FloatingLabel.displayName = 'FloatingLabel';
