import { describe, expect, it } from "bun:test";
import { extractComponentImports } from "./extract-component-imports";

describe("extractComponentImports", () => {
  it("should extract single component import", () => {
    const content = `import { Button } from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["Button"]);
  });

  it("should extract multiple component imports", () => {
    const content = `import { Button, Card, Alert } from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["Button", "Card", "Alert"]);
  });

  it("should handle star imports", () => {
    const content = `import * as FlowbiteReact from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["*"]);
  });

  it("should handle aliased imports", () => {
    const content = `import { Button as FlowButton } from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["Button"]);
  });

  it("should handle imports with comments", () => {
    const content = `import { Button, // this is a button
      Card, // this is a card
      Alert // this is an alert
    } from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["Button", "Card", "Alert"]);
  });

  it("should handle imports from subpaths", () => {
    const content = `import { Button } from 'flowbite-react/lib/components'`;
    expect(extractComponentImports(content)).toEqual(["Button"]);
  });

  it("should handle multiple import statements", () => {
    const content = `
      import { Button } from 'flowbite-react';
      import { Card } from 'flowbite-react/lib/components';
    `;
    expect(extractComponentImports(content)).toEqual(["Button", "Card"]);
  });

  it("should filter out invalid component names", () => {
    const content = `import { Button, invalidName, 123Invalid } from 'flowbite-react'`;
    expect(extractComponentImports(content)).toEqual(["Button"]);
  });

  it("should return empty array for content without flowbite-react imports", () => {
    const content = `import { something } from 'other-library'`;
    expect(extractComponentImports(content)).toEqual([]);
  });

  it("should return empty array for empty content", () => {
    expect(extractComponentImports("")).toEqual([]);
  });
});
