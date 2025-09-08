import { getJsType } from "./get-js-type";

/**
 * Wraps the default export of a JavaScript module with a given function.
 *
 * @param {string} content - The content of the JavaScript module.
 * @param {string} withFunction - The function to wrap the default export with.
 * @returns {string} The modified content with the default export wrapped.
 */
export function wrapDefaultExport(content: string, withFunction: string): string {
  const { isCJS, isESM } = getJsType(content);

  if (!isCJS && !isESM) {
    return content;
  }

  let wrappedContent = content;

  const config = isCJS ? EXPORT_CONFIGS.cjs : EXPORT_CONFIGS.esm;

  // Skip if it's a class/interface export
  if (!content.match(config.skipPattern)) {
    const lastExportMatch = wrappedContent.match(config.matchPattern);
    if (lastExportMatch) {
      const [fullMatch, prefix, rest] = lastExportMatch;
      const { exportValue, restContent } = extractExportValue(rest);
      const replacement = createWrappedReplacement(prefix, exportValue, withFunction, restContent);

      // Replace only the last occurrence
      const index = wrappedContent.lastIndexOf(fullMatch);
      wrappedContent = wrappedContent.slice(0, index) + replacement + wrappedContent.slice(index + fullMatch.length);
    }
  }

  return wrappedContent;
}

const EXPORT_CONFIGS = {
  esm: {
    skipPattern: /export\s+default\s+(?:class|interface|abstract\s+class)\s+/,
    matchPattern: /(export\s+default\s+)([\s\S]*$)/m,
  },
  cjs: {
    skipPattern: /module\.exports\s*=\s*(?:class|interface|abstract\s+class)\s+/,
    matchPattern: /(module\.exports\s*=\s*)([\s\S]*$)/m,
  },
};

/**
 * Extracts the export value from a string, handling nested structures
 */
function extractExportValue(rest: string): { exportValue: string; restContent: string } {
  let depth = 0;
  let i = 0;

  // Parse the export value handling nested parentheses and braces
  for (i = 0; i < rest.length; i++) {
    const char = rest[i];
    if (char === "(" || char === "{") depth++;
    if (char === ")" || char === "}") depth--;

    // Break on semicolon or newline if we're not inside parentheses/braces
    if (depth === 0 && (char === ";" || char === "\n")) {
      return {
        exportValue: rest.slice(0, char === ";" ? i + 1 : i),
        restContent: rest.slice(char === ";" ? i + 1 : i),
      };
    }
  }

  // If we didn't find a terminator, use the whole rest
  return {
    exportValue: rest,
    restContent: "",
  };
}

/**
 * Creates a wrapped replacement for an export statement
 */
function createWrappedReplacement(
  prefix: string,
  exportValue: string,
  withFunction: string,
  restContent: string,
): string {
  const trimmedValue = exportValue.trim();
  const hasTrailingSemi = trimmedValue.endsWith(";");
  return `${prefix}${withFunction}(${trimmedValue.replace(/;$/, "")})${hasTrailingSemi ? ";" : ""}${restContent}`;
}
