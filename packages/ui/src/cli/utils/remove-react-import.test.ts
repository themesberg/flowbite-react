import { describe, expect, it } from "bun:test";
import { parseSync } from "oxc-parser";
import { removeReactImport } from "./remove-react-import";

describe("removeReactImport", () => {
  describe("should remove React default import", () => {
    it("should remove `import React from 'react'`", () => {
      const code = `import React from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength - 1);
      expect(
        result.program.body.every((node) => node.type !== "ImportDeclaration" || node.source.value !== "react"),
      ).toBe(true);
    });

    it('should remove `import React from "react"`', () => {
      const code = `import React from "react";
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength - 1);
    });

    it("should remove React import without semicolon", () => {
      const code = `import React from 'react'
const Component = () => <div>Hello</div>`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength - 1);
    });
  });

  describe("should remove other React import patterns", () => {
    it("should remove React namespace import (import * as React)", () => {
      const code = `import * as React from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      // Namespace imports with 'React' as local name are also removed
      expect(result.program.body.length).toBe(originalLength - 1);
    });

    it("should remove aliased React imports", () => {
      const code = `import { default as React } from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      // Aliased imports with 'React' as local name are also removed
      expect(result.program.body.length).toBe(originalLength - 1);
    });

    it("should remove mixed imports (named + default) where first specifier is React", () => {
      const code = `import React, { useState } from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      // Mixed imports where the first specifier is 'React' are also removed
      expect(result.program.body.length).toBe(originalLength - 1);
    });
  });

  describe("should preserve other imports", () => {
    it("should preserve named imports from react", () => {
      const code = `import { useState, useEffect } from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength);
    });

    it("should preserve other module imports", () => {
      const code = `import React from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength - 1);
      // Verify the other imports are still present
      const importDeclarations = result.program.body.filter((node) => node.type === "ImportDeclaration");
      expect(importDeclarations.length).toBe(2);
    });
  });

  describe("edge cases", () => {
    it("should handle empty program body", () => {
      const code = "";
      const parseResult = parseSync("test.tsx", code);

      const result = removeReactImport(parseResult);

      expect(result.program.body).toEqual([]);
    });

    it("should handle code without any imports", () => {
      const code = `const x = 42;
function hello() { return 'world'; }`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength);
    });

    it("should handle null/undefined parseResult gracefully", () => {
      const result1 = removeReactImport(null as any);
      expect(result1).toBe(null);

      const result2 = removeReactImport(undefined as any);
      expect(result2).toBe(undefined);
    });

    it("should handle parseResult with undefined program", () => {
      const result = removeReactImport({ program: undefined } as any);
      expect(result.program).toBe(undefined);
    });

    it("should handle parseResult with undefined body", () => {
      const result = removeReactImport({ program: { body: undefined } } as any);
      expect(result.program.body).toBe(undefined);
    });

    it("should return the modified parseResult", () => {
      const code = `import React from 'react';`;
      const parseResult = parseSync("test.tsx", code);

      const result = removeReactImport(parseResult);

      expect(result).toBe(parseResult);
    });
  });

  describe("multiple React imports", () => {
    it("should remove all React default imports if duplicated", () => {
      const code = `import React from 'react';
import React from 'react';
const Component = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);

      const result = removeReactImport(parseResult);

      const reactImports = result.program.body.filter(
        (node) => node.type === "ImportDeclaration" && node.source.value === "react",
      );
      expect(reactImports.length).toBe(0);
    });
  });

  describe("TypeScript-specific cases", () => {
    it("should handle React import in TypeScript file", () => {
      const code = `import React from 'react';
interface Props { name: string; }
const Component: React.FC<Props> = ({ name }) => <div>{name}</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength - 1);
    });

    it("should handle type imports from react", () => {
      const code = `import type { FC, ReactNode } from 'react';
const Component: FC = () => <div>Hello</div>;`;
      const parseResult = parseSync("test.tsx", code);
      const originalLength = parseResult.program.body.length;

      const result = removeReactImport(parseResult);

      expect(result.program.body.length).toBe(originalLength);
    });
  });
});
