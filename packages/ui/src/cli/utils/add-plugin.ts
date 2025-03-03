/**
 * Adds a plugin to a configuration content string.
 *
 * @param {Object} options - The options for adding the plugin.
 * @param {string} options.content - The content string to modify.
 * @param {string} options.pluginName - The name of the plugin to add.
 * @param {string} options.configPath - The path within the configuration to add the plugin.
 * @returns {string} The modified content string with the plugin added.
 */
export function addPlugin({
  content,
  pluginName,
  configPath,
}: {
  content: string;
  pluginName: string;
  configPath: string;
}): string {
  // If content is empty, return as is
  if (!content.trim()) {
    return content;
  }

  const pathParts = configPath.split(".");
  const lines = content.split("\n");
  let arrayStart = -1;
  let arrayEnd = -1;
  let foundPath = false;
  let targetObjectStart = -1;

  // First pass: locate the target array and track indentation
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check if we're at a path part
    for (let j = 0; j < pathParts.length; j++) {
      const part = pathParts[j];
      const partPattern = part.includes("/") ? `"${part}"` : part;
      const isLastPart = j === pathParts.length - 1;

      if (trimmedLine.startsWith(partPattern + ":")) {
        if (!isLastPart) {
          // If this is not the last part and we find an opening brace, mark this as potential target
          if (trimmedLine.includes("{")) {
            targetObjectStart = i;
          }
        } else {
          foundPath = true;
          // Check if array is on the same line
          if (trimmedLine.includes("[")) {
            arrayStart = i;
            // If array ends on the same line
            if (trimmedLine.includes("]")) {
              arrayEnd = i;
            }
          }
        }
        break;
      }
    }

    // If we found the path but not the array start yet, look for array start
    if (foundPath && arrayStart === -1 && trimmedLine.startsWith("[")) {
      arrayStart = i;
    }

    // If we found the array start but not the end, look for array end
    if (arrayStart !== -1 && arrayEnd === -1 && (trimmedLine === "]," || trimmedLine === "]")) {
      arrayEnd = i;
    }
  }

  // Case 1: Array exists - add plugin to it
  if (arrayStart !== -1 && arrayEnd !== -1) {
    // Check if plugin already exists
    for (let i = arrayStart; i <= arrayEnd; i++) {
      const line = lines[i].trim();
      if (line.includes(pluginName)) {
        return content; // Plugin already exists, return unchanged content
      }
    }

    let lastItemEnd = -1;
    let lastItemIndent = "";
    let baseIndent = "";

    // Find the base indentation
    if (arrayStart >= 0) {
      baseIndent = lines[arrayStart].match(/^\s*/)?.[0] || "";
      if (arrayStart !== arrayEnd) {
        // If array spans multiple lines, use the indentation of the array's opening bracket
        const arrayLine = lines[arrayStart];
        const bracketIndex = arrayLine.indexOf("[");
        if (bracketIndex !== -1) {
          baseIndent = arrayLine.substring(0, bracketIndex);
        }
      }
    }

    // Find the last item's end and its indentation
    for (let i = arrayEnd - 1; i > arrayStart; i--) {
      const line = lines[i].trim();
      if (line.length > 0 && !line.startsWith("//")) {
        lastItemEnd = i;
        lastItemIndent = lines[i].match(/^\s*/)?.[0] || "";
        break;
      }
    }

    // Empty array case
    if (lastItemEnd === -1) {
      const newIndent = baseIndent + "  ";
      // If array is empty and on single line
      if (arrayStart === arrayEnd) {
        const arrayLine = lines[arrayStart];
        const colonIndex = arrayLine.indexOf(":");
        const arrayStartIndex = arrayLine.indexOf("[", colonIndex);
        const arrayEndIndex = arrayLine.indexOf("]", arrayStartIndex);

        if (arrayStartIndex !== -1 && arrayEndIndex !== -1) {
          const beforeArray = arrayLine.substring(0, arrayStartIndex + 1);
          const afterArray = arrayLine.substring(arrayEndIndex);

          // Replace the current line with properly formatted array
          lines[arrayStart] = beforeArray + "\n" + newIndent + pluginName + "\n" + baseIndent + afterArray;
        }
      } else {
        // Array spans multiple lines
        lines.splice(arrayEnd, 0, newIndent + pluginName);
      }
    } else {
      // Add comma to last item if needed
      if (!lines[lastItemEnd].trim().endsWith(",")) {
        lines[lastItemEnd] = lines[lastItemEnd] + ",";
      }
      // Insert new plugin with same indentation as last item
      lines.splice(lastItemEnd + 1, 0, lastItemIndent + pluginName);
    }

    return lines.join("\n");
  }

  // Case 2: Parent exists but no array - create array with plugin
  if (targetObjectStart !== -1) {
    const targetIndent = lines[targetObjectStart].match(/^\s*/)?.[0] || "";
    const insertIndent = targetIndent + "  ";
    let insertIndex = -1;
    let braceCount = 0;

    // Find the closing brace of the target object
    for (let i = targetObjectStart; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes("{")) braceCount++;
      if (line.includes("}")) {
        braceCount--;
        if (braceCount === 0) {
          insertIndex = i;
          break;
        }
      }
    }

    if (insertIndex !== -1) {
      // Add comma to the last property if needed
      const lastPropLine = lines[insertIndex - 1].trim();
      if (!lastPropLine.endsWith(",") && !lastPropLine.endsWith("{")) {
        lines[insertIndex - 1] = lines[insertIndex - 1] + ",";
      }

      // Insert new array with plugin
      const propName = pathParts[pathParts.length - 1].includes("/")
        ? `"${pathParts[pathParts.length - 1]}"`
        : pathParts[pathParts.length - 1];
      lines.splice(insertIndex, 0, insertIndent + propName + ": [" + pluginName + "]");
      return lines.join("\n");
    }
  }

  // Case 3: Create full path
  const lastClosingBrace = lines.findIndex((line) => line.trim() === "})");
  if (lastClosingBrace !== -1) {
    // Add comma to the line before if needed
    const prevLine = lines[lastClosingBrace - 1].trim();
    if (!prevLine.endsWith(",") && !prevLine.endsWith("{")) {
      lines[lastClosingBrace - 1] = lines[lastClosingBrace - 1] + ",";
    }

    const baseIndent = lines[lastClosingBrace].match(/^\s*/)?.[0] || "";
    let currentIndent = baseIndent + "  ";
    const insertLines = [];

    // Build nested structure
    for (let i = 0; i < pathParts.length - 1; i++) {
      const propName = pathParts[i].includes("/") ? `"${pathParts[i]}"` : pathParts[i];
      insertLines.push(currentIndent + propName + ": {");
      currentIndent += "  ";
    }

    // Add the plugins array
    const lastProp = pathParts[pathParts.length - 1];
    const propName = lastProp.includes("/") ? `"${lastProp}"` : lastProp;
    insertLines.push(currentIndent + propName + ": [" + pluginName + "]");

    // Close all opened braces
    for (let i = 0; i < pathParts.length - 1; i++) {
      currentIndent = currentIndent.slice(2);
      insertLines.push(currentIndent + "}");
    }

    // Insert the new structure
    lines.splice(lastClosingBrace, 0, ...insertLines);
    return lines.join("\n");
  }

  return content;
}
