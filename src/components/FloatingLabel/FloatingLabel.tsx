import type { ComponentProps } from 'react';
import {forwardRef} from 'react';
// import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteBoolean, FlowbiteColors, FlowbiteSizes } from '../../';
// import { useTheme } from '../../';
// import { mergeDeep } from '../../helpers/merge-deep';

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
    extends Pick<FlowbiteColors, 'gray' | 'failure' | 'success'> {
    [key: string]: string;
}

export interface FlowbiteFloatingLabelSizes extends Pick<FlowbiteSizes, 'sm' | 'md' > {
    [key: string]: string;
}

export interface FloatingLabelProps extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
    error?: boolean;
    helperText?: string;
    sizing?: keyof FlowbiteFloatingLabelSizes;
    theme?: DeepPartial<FlowbiteFloatingLabelTheme>;
    buttonStyle: string;
    label: string;
    disabled?: boolean;
}

export const FloatingLabel = forwardRef<HTMLInputElement, FloatingLabelProps>(
    (
        {
            className,
            error = null,
            helperText,
            theme: customTheme = {},
            sizing= "md",
            buttonStyle,
            label,
            disabled= false,
            ...props
        },
        ref,
    ) => {
        // const theme = mergeDeep(useTheme().theme.textInput, customTheme);
        const inputColor = (error === false) ? "green-600" : (error === null ? "gray-400" : "red-600");

        const filledStyles = `block rounded-t-lg px-2.5 pb-2.5 pt-${sizing === "sm"?"4":"5"} w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-${inputColor} dark:border-${inputColor} appearance-none dark:text-white dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const outlinedStyles = `block px-2.5 pb-2.5 pt-${sizing === "sm"?"3":"4"} w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`
        const standardStyles = `block py-${sizing === "sm"?"2":"2.5"} px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-${inputColor} appearance-none dark:text-white dark:border-${inputColor} dark:focus:border-${inputColor} focus:outline-none focus:ring-0 focus:border-${inputColor} peer`

        let buttonTheme;

        if (buttonStyle === 'filled') {
            buttonTheme = filledStyles;
        } else if (buttonStyle === 'outlined') {
            buttonTheme = outlinedStyles;
        } else {
            buttonTheme = standardStyles;
        }
        return (
            <div>
                <div className="relative">
                    <input type="text" id="floatingLabelInput" aria-describedby="floatingLabelInputHelp"
                           className={`${buttonTheme}`}
                           placeholder=" "
                           disabled={disabled}
                           {...props}
                           ref={ref}/>
                    <label htmlFor="floatingLabelInput"
                           className={`absolute text-sm text-${inputColor} dark:text-${inputColor} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>
                        {label}
                    </label>
                </div>
                <p id="floatingLabelInputHelp" className={`mt-2 text-xs text-${inputColor} dark:text-${inputColor}`}> {helperText}</p>
            </div>
        );
    },
);

FloatingLabel.displayName = 'FloatingLabel';
