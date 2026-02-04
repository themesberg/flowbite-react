import { describe, expect, it } from "bun:test";
import { extractClassList, extractDependencyList } from "./generate-metadata";

describe("extractClassList", () => {
  it("should extract class names from createTheme function call", async () => {
    const content = `
            createTheme({
                button: "bg-blue-500 hover:bg-blue-600"
            });
        `;

    const result = await extractClassList(content);
    expect(result).toEqual(["bg-blue-500", "hover:bg-blue-600"]);
  });

  it("should extract and sort multiple class names", async () => {
    const content = `
            createTheme({
                button: "z-10 bg-red-500",
                card: "m-2 p-4"
            });
        `;

    const result = await extractClassList(content);
    expect(result).toEqual(["bg-red-500", "m-2", "p-4", "z-10"]);
  });

  it("should handle empty strings", async () => {
    const content = `
            createTheme({
                button: ""
            });
        `;

    const result = await extractClassList(content);
    expect(result).toEqual([]);
  });

  it("should ignore class names outside createTheme", async () => {
    const content = `
            const classes = "bg-blue-500";
            createTheme({
                button: "text-white"
            });
        `;

    const result = await extractClassList(content);
    expect(result).toEqual(["text-white"]);
  });

  it("should handle multiple createTheme calls", async () => {
    const content = `
            createTheme({
                button: "btn-primary"
            });
            createTheme({
                card: "card-default"
            });
        `;

    const result = await extractClassList(content);
    expect(result).toEqual(["btn-primary", "card-default"]);
  });

  it("should handle TypeScript type annotations", async () => {
    const content = `
      const theme: ButtonTheme = createTheme({
        base: "flex items-center",
        color: {
          primary: "bg-blue-500 text-white"
        }
      });
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["bg-blue-500", "flex", "items-center", "text-white"]);
  });

  it("should handle TypeScript as const assertion", async () => {
    const content = `
      const theme = createTheme({
        button: "rounded-lg px-4 py-2"
      } as const);
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["px-4", "py-2", "rounded-lg"]);
  });

  it("should handle TypeScript satisfies operator", async () => {
    const content = `
      const theme = createTheme({
        card: "shadow-lg border rounded-xl"
      }) satisfies CardTheme;
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["border", "rounded-xl", "shadow-lg"]);
  });

  it("should handle TypeScript generic type parameter", async () => {
    const content = `
      const theme = createTheme<ButtonTheme>({
        base: "inline-flex justify-center",
        size: {
          sm: "text-sm px-3",
          lg: "text-lg px-6"
        }
      });
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["inline-flex", "justify-center", "px-3", "px-6", "text-lg", "text-sm"]);
  });

  it("should handle nested TypeScript objects with type annotations", async () => {
    const content = `
      interface Theme {
        root: { base: string };
      }
      
      const buttonTheme: Theme = createTheme({
        root: {
          base: "font-medium focus:ring-4"
        }
      });
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["focus:ring-4", "font-medium"]);
  });

  it("should handle export with type annotation", async () => {
    const content = `
      export const accordionTheme: AccordionTheme = createTheme({
        root: "divide-y divide-gray-200",
        content: "p-5"
      });
    `;

    const result = await extractClassList(content);
    expect(result).toEqual(["divide-gray-200", "divide-y", "p-5"]);
  });
});

describe("extractDependencyList", () => {
  it("should extract named imports", async () => {
    const content = `
      import { Button, Card } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button", "Card"]);
  });

  it("should handle multiple import statements", async () => {
    const content = `
      import { Button } from 'flowbite-react';
      import { Modal, Table } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button", "Modal", "Table"]);
  });
  it("should handle empty content", async () => {
    const content = "";
    const result = await extractDependencyList(content);
    expect(result).toEqual([]);
  });

  it("should ignore default imports", async () => {
    const content = `
        import Default, { Named } from 'flowbite-react';
      `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Named"]);
  });

  it("should sort imports alphabetically", async () => {
    const content = `
        import { Zebra, Beta, Alpha } from 'flowbite-react';
      `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Alpha", "Beta", "Zebra"]);
  });

  it("should omit type-only import declarations", async () => {
    const content = `
      import { Button } from 'flowbite-react';
      import type { CardTheme } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button"]);
  });

  it("should omit inline type imports", async () => {
    const content = `
      import { type ModalProps, Modal, type ModalTheme } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Modal"]);
  });

  it("should omit mixed type imports", async () => {
    const content = `
      import { Button, type ButtonProps } from 'flowbite-react';
      import type { CardTheme } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button"]);
  });

  it("should handle aliased imports", async () => {
    const content = `
      import { Button as FlowbiteButton, Card as FlowbiteCard } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button", "Card"]);
  });

  it("should handle mixed default, named, and type imports", async () => {
    const content = `
      import React, { useState, type FC } from 'react';
      import { Accordion, AccordionPanel } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Accordion", "AccordionPanel", "useState"]);
  });

  it("should handle namespace imports", async () => {
    const content = `
      import * as Flowbite from 'flowbite-react';
      import { Table } from 'flowbite-react';
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Table"]);
  });

  it("should handle TSX component file with imports", async () => {
    const content = `
      import type { FC, ReactNode } from 'react';
      import { Button, Card, Modal } from 'flowbite-react';
      import { theme } from './theme';

      export const MyComponent: FC<{ children: ReactNode }> = ({ children }) => {
        return <Card><Button>{children}</Button></Card>;
      };
    `;
    const result = await extractDependencyList(content);
    expect(result).toEqual(["Button", "Card", "Modal", "theme"]);
  });
});
