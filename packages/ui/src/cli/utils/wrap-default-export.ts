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

  // Handle ESM exports
  if (isESM) {
    const esmMatch = content.match(/export\s+default\s+(?:class|interface|abstract\s+class)\s+/);
    if (!esmMatch) {
      wrappedContent = wrappedContent.replace(
        /(export\s+default\s+)([^;\n]+(?:{[^}]*})?[^;\n]*)(;?\s*)$/gm,
        (_, prefix, exportValue, semicolon) => {
          const trimmedValue = exportValue.trim();
          return `${prefix}${withFunction}(${trimmedValue})${semicolon}`;
        },
      );
    }
  }

  // Handle CJS exports
  if (isCJS) {
    const cjsMatch = content.match(/module\.exports\s*=\s*(?:class|interface|abstract\s+class)\s+/);
    if (!cjsMatch) {
      wrappedContent = wrappedContent.replace(
        /(module\.exports\s*=\s*)([^;\n]+(?:{[^}]*})?[^;\n]*)(;?\s*)$/gm,
        (_, prefix, exportValue, semicolon) => {
          const trimmedValue = exportValue.trim();
          return `${prefix}${withFunction}(${trimmedValue})${semicolon}`;
        },
      );
    }
  }

  return wrappedContent;
}
