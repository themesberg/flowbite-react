import type { ComponentProps } from 'react';
import {forwardRef} from 'react';
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
    color?: string;
    helperText?: string;
    sizing?: keyof FlowbiteFloatingLabelSizes;
    theme?: DeepPartial<FlowbiteFloatingLabelTheme>;
    buttonStyle: string;
    label: string;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
    (
        {
            className,
            color = 'gray',
            helperText,
            theme: customTheme = {},
            buttonStyle,
            label,
            ...props
        },
        ref,
    ) => {
        const theme = mergeDeep(useTheme().theme.textInput, customTheme);
        const inputColor = (color === "success") ? "green-600" : "red-600"
        console.log(inputColor, "input color")

        const filledStyles = `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-${inputColor} dark:border-${inputColor} appearance-none dark:text-white dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const outlinedStyles = `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const standardStyles = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`

        let buttonTheme;

        if (buttonStyle === 'filled') {
            buttonTheme = filledStyles;
        } else if (buttonStyle === 'outlined') {
            buttonTheme = outlinedStyles;
        } else {
            buttonTheme = standardStyles;
        }
        return (
            <>
                <div className={twMerge(theme.base, className, "relative")}>
                    <div className={theme.field.base}>
                        <div>
                            <div className="relative">
                                <input type="text" id="filled_success" aria-describedby="filled_success_help"
                                       className={`${buttonTheme}`}
                                       placeholder=" "
                                       {...props}
                                       ref={ref}/>
                                <label htmlFor="filled_success"
                                       className={`absolute text-sm text-${inputColor} dark:text-${inputColor} duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4`}>
                                    {label}
                                </label>
                            </div>
                            <p id="filled_success_help" className={`mt-2 text-xs text-${inputColor} dark:text-${inputColor}`}> {helperText}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    },
);

FloatingLabel.displayName = 'FloatingLabel';
