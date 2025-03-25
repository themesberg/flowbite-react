import { describe, expect, it } from "vitest";
import { joinNormalizedPath, normalizeImportPath } from "./normalize-path";

describe("normalizeImportPath", () => {
  it("should normalize Windows-style paths to use forward slashes", () => {
    expect(normalizeImportPath("path\\to\\file")).toBe("path/to/file");
    expect(normalizeImportPath("C:\\Users\\name\\project")).toBe("C:/Users/name/project");
  });

  it("should leave Unix-style paths unchanged", () => {
    expect(normalizeImportPath("path/to/file")).toBe("path/to/file");
    expect(normalizeImportPath("/home/user/project")).toBe("/home/user/project");
  });

  it("should handle mixed path separators", () => {
    expect(normalizeImportPath("path\\to/file")).toBe("path/to/file");
    expect(normalizeImportPath("C:/Users\\name/project")).toBe("C:/Users/name/project");
  });

  it("should handle paths with no separators", () => {
    expect(normalizeImportPath("file")).toBe("file");
  });
});

describe("joinNormalizedPath", () => {
  it("should join path segments and normalize to forward slashes", () => {
    expect(joinNormalizedPath("path", "to", "file")).toBe("path/to/file");
    expect(joinNormalizedPath("C:", "Users", "name", "project")).toBe("C:/Users/name/project");
  });

  it("should handle single segment", () => {
    expect(joinNormalizedPath("file")).toBe("file");
  });

  it("should handle empty segments", () => {
    expect(joinNormalizedPath("path", "", "file")).toBe("path/file");
  });

  it("should handle segments with existing separators", () => {
    expect(joinNormalizedPath("path\\to", "file")).toBe("path/to/file");
    expect(joinNormalizedPath("path/to", "file")).toBe("path/to/file");
  });
});
