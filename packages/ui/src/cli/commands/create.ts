import fs from "fs/promises";
import path from "path";
import readline from "readline";
import { getConfig } from "../utils/get-config";

export async function create(componentName?: string) {
  try {
    const config = await getConfig();

    let finalComponentName = componentName;

    // If no component name was provided, prompt the user
    if (!finalComponentName) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      finalComponentName = await new Promise<string>((resolve) => {
        rl.question('Enter component name (e.g., "my-component"): ', (answer) => {
          resolve(answer.trim());
        });
      });

      rl.close();
    }

    if (!finalComponentName) {
      console.error("Component name is required");
      process.exit(1);
    }

    // Format component name to ensure it starts with uppercase and remove special characters
    const formattedName = finalComponentName
      .split(/[^a-zA-Z0-9]/) // Split on any non-alphanumeric characters
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(""); // Join back together

    // Create camelCase version for theme usage
    const camelCaseName = formattedName.charAt(0).toLowerCase() + formattedName.slice(1);

    if (!formattedName) {
      console.error("Component name must contain at least one letter or number");
      process.exit(1);
    }

    // Determine file extension based on tsx config
    const fileExtension = config.tsx ? ".tsx" : ".jsx";
    const componentFilePath = path.join(config.path, `${finalComponentName}${fileExtension}`);

    // Ensure the components directory exists
    try {
      await fs.access(config.path);
    } catch {
      console.log(`Creating components directory at ${config.path}...`);
      await fs.mkdir(config.path, { recursive: true });
    }

    // Check if file already exists
    try {
      await fs.access(componentFilePath);
      console.error(`Component file already exists at ${componentFilePath}`);
      process.exit(1);
    } catch {
      // File doesn't exist, we can proceed
    }

    // Create component content with or without "use client" directive based on config
    const useClientDirective = config.rsc ? `"use client";\n\n` : "";

    // Create different content based on whether we're using TypeScript or JavaScript
    let componentContent;

    if (config.tsx) {
      // TypeScript version
      componentContent = `${useClientDirective}import { createTheme } from "flowbite-react/helpers/create-theme";
import { get } from "flowbite-react/helpers/get";
import { resolveProps } from "flowbite-react/helpers/resolve-props";
import { useResolveTheme } from "flowbite-react/helpers/resolve-theme";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { useThemeProvider } from "flowbite-react/theme/provider";
import type { ThemingProps } from "flowbite-react/types";
import { forwardRef, type ComponentProps } from "react";

declare module "flowbite-react/types" {
  interface FlowbiteTheme {
    ${camelCaseName}: ${formattedName}Theme;
  }

  interface FlowbiteProps {
    ${camelCaseName}: Partial<WithoutThemingProps<${formattedName}Props>>;
  }
}

export interface ${formattedName}Theme {
  base: string;
  // ...
}

export const ${camelCaseName}Theme = createTheme<${formattedName}Theme>({
  base: "",
  // ...
});

export interface ${formattedName}Props extends ComponentProps<"div">, ThemingProps<${formattedName}Theme> {
  // ...
}

export const ${formattedName} = forwardRef<HTMLDivElement, ${formattedName}Props>((props, ref) => {
  const provider = useThemeProvider();

  const theme = useResolveTheme(
    [${camelCaseName}Theme, provider.theme?.${camelCaseName}, props.theme],
    [get(provider.clearTheme, "${camelCaseName}"), props.clearTheme],
    [get(provider.applyTheme, "${camelCaseName}"), props.applyTheme],
  );

  const { children, className, ...restProps } = resolveProps(props, provider.props?.${camelCaseName});

  return (
    <div ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      {children}
    </div>
  );
});

${formattedName}.displayName = "${formattedName}";`;
    } else {
      // JavaScript version (without TypeScript syntax)
      componentContent = `${useClientDirective}import { createTheme } from "flowbite-react/helpers/create-theme";
import { get } from "flowbite-react/helpers/get";
import { resolveProps } from "flowbite-react/helpers/resolve-props";
import { useResolveTheme } from "flowbite-react/helpers/resolve-theme";
import { twMerge } from "flowbite-react/helpers/tailwind-merge";
import { useThemeProvider } from "flowbite-react/theme/provider";
import { forwardRef } from "react";

export const ${camelCaseName}Theme = createTheme({
  base: "",
  // ...
});

export const ${formattedName} = forwardRef((props, ref) => {
  const provider = useThemeProvider();

  const theme = useResolveTheme(
    [${camelCaseName}Theme, provider.theme?.${camelCaseName}, props.theme],
    [get(provider.clearTheme, "${camelCaseName}"), props.clearTheme],
    [get(provider.applyTheme, "${camelCaseName}"), props.applyTheme],
  );

  const { children, className, ...restProps } = resolveProps(props, provider.props?.${camelCaseName});

  return (
    <div ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      {children}
    </div>
  );
});

${formattedName}.displayName = "${formattedName}";`;
    }

    // Write the component file
    console.log(`Creating component file at ${componentFilePath}...`);
    await fs.writeFile(componentFilePath, componentContent);

    console.log(`\n✅ Component ${formattedName} created successfully!`);
  } catch (error) {
    console.error("Failed to create component:", error);
  }
}
