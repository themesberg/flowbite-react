/**
 * Adds an import statement to a given content string.
 *
 * @param {Object} options - The options for adding the import.
 * @param {string} options.content - The content string to modify.
 * @param {string} options.importPath - The path of the module to import.
 * @param {string} options.importName - The name to assign to the imported module.
 * @returns {string} The modified content string with the import added.
 */
export function addImport({
  content,
  importPath,
  importName,
}: {
  content: string;
  importPath: string;
  importName: string;
}): string {
  // If content is empty, return as is
  if (!content.trim()) {
    return content;
  }

  // Check if import already exists
  const importRegex = new RegExp(
    `(import\\s+${importName}|const\\s+${importName}\\s*=\\s*require\\(['"]${importPath}['"]\\))`,
    "g",
  );
  if (importRegex.test(content)) {
    return content;
  }

  // Determine if the file is ESM or CJS
  const hasESMImport = /import\s+.*\s+from\s+['"]/m.test(content);
  const hasESMExport = /export\s+/m.test(content);
  const hasCJSRequire = /\brequire\s*\(/m.test(content);
  const hasCJSExport = /\bmodule\.exports\b/m.test(content);

  const isESM = hasESMImport || hasESMExport;
  const isCJS = hasCJSRequire || hasCJSExport;

  // If neither ESM nor CJS, return unchanged
  if (!isESM && !isCJS) {
    return content;
  }

  // Create the import statement
  let importStatement;
  if (isESM && !isCJS) {
    importStatement = `import ${importName} from "${importPath}";`;
  } else {
    importStatement = `const ${importName} = require("${importPath}");`;
  }

  // Split content into lines for processing
  const lines = content.trim().split("\n");

  // Find all import/require statements
  const importLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (
      line.startsWith("import ") ||
      line.includes("} from ") ||
      (line.startsWith("const ") && line.includes("require("))
    ) {
      importLines.push(i);
    }
  }

  // If we have imports, add after the last one
  if (importLines.length > 0) {
    const lastImportLine = importLines[importLines.length - 1];

    // Insert after the last import
    lines.splice(lastImportLine + 1, 0, importStatement);

    // Check if we need to add a blank line after the new import
    if (lastImportLine + 2 < lines.length && lines[lastImportLine + 2].trim() !== "") {
      // Check if the next line is not an import
      const nextLine = lines[lastImportLine + 2].trim();
      if (
        !nextLine.startsWith("import ") &&
        !nextLine.includes("} from ") &&
        !(nextLine.startsWith("const ") && nextLine.includes("require("))
      ) {
        lines.splice(lastImportLine + 2, 0, "");
      }
    }
  } else {
    // No imports found, add at the beginning
    lines.unshift(importStatement);

    // Add a blank line after the import if there's content
    if (lines.length > 1) {
      lines.splice(1, 0, "");
    }
  }

  return lines.join("\n");
}
