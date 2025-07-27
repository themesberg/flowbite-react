import { describe, expect, it } from "bun:test";
import { addImport } from "./add-import";

describe("addImport", () => {
  // ESM Test Cases
  describe("ESM", () => {
    it("should add import after existing imports", () => {
      const content = `
import { existingImport } from 'existing-module';

export default {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
import { existingImport } from 'existing-module';
import newImport from "new-module";

export default {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should add import at the top with two newlines if no imports exist", () => {
      const content = `
export default {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `import newImport from "new-module";

export default {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should handle multi-line imports", () => {
      const content = `
import {
    existingImport1,
    existingImport2
} from 'existing-module';

export default {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
import {
    existingImport1,
    existingImport2
} from 'existing-module';
import newImport from "new-module";

export default {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should handle imports without semicolons", () => {
      const content = `
import { existingImport } from 'existing-module'
import anotherImport from 'another-module'

export default {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
import { existingImport } from 'existing-module'
import anotherImport from 'another-module'
import newImport from "new-module";

export default {};
`;
      expect(result.trim()).toBe(expected.trim());
    });
  });

  // CJS Test Cases
  describe("CJS", () => {
    it("should add require after existing requires", () => {
      const content = `
const existingImport = require('existing-module');

module.exports = {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
const existingImport = require('existing-module');
const newImport = require("new-module");

module.exports = {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should add require at the top with two newlines if no requires exist", () => {
      const content = `
module.exports = {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `const newImport = require("new-module");

module.exports = {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should handle multiple requires", () => {
      const content = `
const existingImport1 = require('existing-module');
const existingImport2 = require('another-module');

module.exports = {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
const existingImport1 = require('existing-module');
const existingImport2 = require('another-module');
const newImport = require("new-module");

module.exports = {};
`;
      expect(result.trim()).toBe(expected.trim());
    });

    it("should handle requires without semicolons", () => {
      const content = `
const existingImport1 = require('existing-module')
const existingImport2 = require('another-module')

module.exports = {};
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      const expected = `
const existingImport1 = require('existing-module')
const existingImport2 = require('another-module')
const newImport = require("new-module");

module.exports = {};
`;
      expect(result.trim()).toBe(expected.trim());
    });
  });

  // Edge Cases
  describe("Edge Cases", () => {
    it("should return unchanged content if neither ESM nor CJS", () => {
      const content = `
// Some random content
const x = 42;
`;
      const result = addImport({
        content,
        importPath: "new-module",
        importName: "newImport",
      });

      expect(result.trim()).toBe(content.trim());
    });
  });
});
