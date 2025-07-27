import { describe, expect, it } from "bun:test";
import { hasThemeInit } from "./create-init-logger";

describe("hasThemeInit", () => {
  it("should detect self-closing ThemeInit with space", () => {
    expect(hasThemeInit("<ThemeInit />")).toBe(true);
  });

  it("should detect self-closing ThemeInit without space", () => {
    expect(hasThemeInit("<ThemeInit/>")).toBe(true);
  });

  it("should detect empty ThemeInit tags", () => {
    expect(hasThemeInit("<ThemeInit></ThemeInit>")).toBe(true);
  });

  it("should not detect ThemeInit with content", () => {
    expect(hasThemeInit("<ThemeInit>some content</ThemeInit>")).toBe(false);
  });

  it("should not detect partial matches", () => {
    expect(hasThemeInit("ThemeInit")).toBe(false);
  });

  it("should handle whitespace variations", () => {
    expect(hasThemeInit("<ThemeInit   />")).toBe(true);
    expect(hasThemeInit("<ThemeInit   ></ThemeInit>")).toBe(true);
  });

  it("should return false for empty content", () => {
    expect(hasThemeInit("")).toBe(false);
  });

  it("should handle commented out ThemeInit", () => {
    expect(hasThemeInit("<!-- <ThemeInit /> -->")).toBe(false);
    expect(hasThemeInit("{/* <ThemeInit /> */}")).toBe(false);
    expect(hasThemeInit("// <ThemeInit />")).toBe(false);
  });

  it("should detect ThemeInit in JSX with children", () => {
    const content = `
      import type { PropsWithChildren } from "react";
      import { ThemeInit } from "../.flowbite-react/init";

      export default function RootLayout({ children }: PropsWithChildren) {
        return (
          <html lang="en" suppressHydrationWarning>
            <body className="bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
              <ThemeInit />
              {children}
            </body>
          </html>
        );
      }
    `;
    expect(hasThemeInit(content)).toBe(true);
  });

  it("should detect ThemeInit in JSX", () => {
    const content = `
      import { ThemeInit } from "../.flowbite-react/init";
      import { App } from "./App";

      export default function App() {
        return (
          <>
            <ThemeInit />
            <App />
          </>
        );
      }
    `;
    expect(hasThemeInit(content)).toBe(true);
  });

  it("should not detect ThemeInit in JSX", () => {
    const content = `
      import { ThemeInit } from "../.flowbite-react/init";
      import { App } from "./App";

      export default function App() {
        return (
          <>
            <App />
          </>
        );
      }
    `;
    expect(hasThemeInit(content)).toBe(false);
  });

  it("should detect multiple ThemeInit components", () => {
    const content = `
      <ThemeInit />
      <div>Some content</div>
      <ThemeInit />
    `;
    expect(hasThemeInit(content)).toBe(true);
  });

  it("should detect ThemeInit with attributes/props", () => {
    expect(hasThemeInit('<ThemeInit data-testid="theme-init" />')).toBe(true);
    expect(hasThemeInit('<ThemeInit className="my-class" />')).toBe(true);
    expect(hasThemeInit('<ThemeInit id="theme" custom={true} />')).toBe(true);
  });

  it("should detect ThemeInit with newlines between tags", () => {
    expect(
      hasThemeInit(`<ThemeInit
    />`),
    ).toBe(true);
    expect(
      hasThemeInit(`<ThemeInit

    ></ThemeInit>`),
    ).toBe(true);
  });

  it("should handle more comment variations", () => {
    expect(hasThemeInit("/* <ThemeInit /> */")).toBe(false);
    expect(
      hasThemeInit(`/**
     * <ThemeInit />
     */`),
    ).toBe(false);
    expect(hasThemeInit("# <ThemeInit />")).toBe(false);
  });

  it("should not detect case variations of ThemeInit", () => {
    expect(hasThemeInit("<themeInit />")).toBe(false);
    expect(hasThemeInit("<Themeinit />")).toBe(false);
    expect(hasThemeInit("<THEMEINIT />")).toBe(false);
  });

  it("should detect ThemeInit in template literals", () => {
    const content = `
      const template = \`
        <div>
          <ThemeInit />
        </div>
      \`;
    `;
    expect(hasThemeInit(content)).toBe(true);
  });

  it("should not detect malformed ThemeInit tags", () => {
    expect(hasThemeInit("< ThemeInit/>")).toBe(false);
    expect(hasThemeInit("<ThemeInit/ >")).toBe(false);
    expect(hasThemeInit("<ThemeInit</ThemeInit>")).toBe(false);
    expect(hasThemeInit("<<ThemeInit />")).toBe(false);
  });
});
