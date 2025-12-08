import prettier from "prettier";
import { colors } from "../src/plugin/tailwindcss/colors";
import { backgroundImage, boxShadow } from "../src/plugin/tailwindcss/theme";

let VARS = "";
let COLORS = "";

for (const colorName in colors) {
  const colorShades = colors[colorName as keyof typeof colors];

  for (const shade in colorShades) {
    VARS += `--${colorName}-${shade}: ${colorShades[shade as unknown as keyof typeof colorShades]};\n`;
  }
  VARS += `\n`;

  for (const shade in colorShades) {
    COLORS += `--color-${colorName}-${shade}: var(--${colorName}-${shade});\n`;
  }
  COLORS += `\n`;
}

const BACKGROUND_IMAGES = Object.entries(backgroundImage)
  .map(([name, value]) => `--bg-${name}: ${value};`)
  .join("\n");

const SHADOWS = Object.entries(boxShadow)
  .map(([name, value]) => `--shadow-${name}: ${value};`)
  .join("\n");

const content = `
:root {
  ${VARS}
}

@theme inline {
  ${COLORS}
}

@theme {
  ${BACKGROUND_IMAGES}
}

@theme {
  ${SHADOWS}
}
`;

const outputFile = "src/plugin/tailwindcss/index.css";

try {
  await Bun.write(
    outputFile,
    await prettier.format(content, {
      parser: "css",
    }),
  );
  console.log(`Tailwind plugin CSS file generated successfully: ${outputFile}`);
} catch (error) {
  console.error(`Failed generating Tailwind plugin CSS file: ${outputFile}`, error);
}
