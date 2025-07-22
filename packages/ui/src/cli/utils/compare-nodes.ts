/**
 * Compare two AST nodes ignoring location info and comments
 */
export function compareNodes(a: unknown, b: unknown): boolean {
  if (a === b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    return a.every((item, i) => compareNodes(item, b[i]));
  }
  if (typeof a !== "object" || typeof b !== "object") {
    return a === b;
  }

  // Handle string literals specially - normalize quotes
  if (
    "type" in a &&
    "type" in b &&
    (a.type === "StringLiteral" || a.type === "Literal") &&
    (b.type === "StringLiteral" || b.type === "Literal") &&
    "value" in a &&
    "value" in b &&
    typeof a.value === "string" &&
    typeof b.value === "string"
  ) {
    return a.value === b.value;
  }

  // Skip location and comment-related properties
  const keysA = Object.keys(a).filter(
    (k) => !["start", "end", "loc", "range", "tokens", "comments", "leadingComments", "trailingComments"].includes(k),
  );
  const keysB = Object.keys(b).filter(
    (k) => !["start", "end", "loc", "range", "tokens", "comments", "leadingComments", "trailingComments"].includes(k),
  );

  if (keysA.length !== keysB.length) {
    return false;
  }
  return keysA.every((key) => compareNodes(a[key as keyof typeof a], b[key as keyof typeof b]));
}
