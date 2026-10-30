import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../theme/provider";
import type { CustomFlowbiteTheme } from "../../types";
import { HelperText } from "./HelperText";

describe("Components / HelperText", () => {
  describe("Rendering", () => {
    it("should render", () => {
      render(<HelperText>Some helper text</HelperText>);

      expect(helperText()).toBeInTheDocument();
    });

    it("should render as a `<p>` element by default", () => {
      render(<HelperText>Some helper text</HelperText>);

      expect(helperText().tagName).toBe("P");
    });

    it("should use `gray` color by default", () => {
      render(<HelperText>Some helper text</HelperText>);

      expect(helperText()).toHaveClass("text-gray-500");
      expect(helperText()).toHaveClass("dark:text-gray-300");
    });

    it.each([
      ["gray", "text-gray-500", "dark:text-gray-300"],
      ["info", "text-cyan-700", "dark:text-cyan-800"],
      ["success", "text-green-600", "dark:text-green-500"],
      ["failure", "text-red-600", "dark:text-red-500"],
      ["warning", "text-yellow-500", "dark:text-yellow-600"],
    ] as const)("should use `%s` color classes when passed", (color, expectedClass, darkClass) => {
      render(<HelperText color={color}>Some helper text</HelperText>);

      expect(helperText()).toHaveClass(expectedClass);
      expect(helperText()).toHaveClass(darkClass);
    });
  });

  describe("Classname", () => {
    it("should merge not overwrite", () => {
      render(<HelperText className="italic">Some helper text</HelperText>);

      expect(helperText()).toHaveClass("italic");
      expect(helperText()).toHaveClass("text-sm");
    });
  });

  describe("Ref", () => {
    it("should forward the ref to the underlying `<p>` element", () => {
      let ref: HTMLParagraphElement | null = null;

      render(
        <HelperText
          ref={(node) => {
            ref = node;
          }}
        >
          Some helper text
        </HelperText>,
      );

      expect(ref).toBeInstanceOf(HTMLParagraphElement);
    });
  });

  describe("Theme", () => {
    it("should use custom `base` classes", () => {
      const theme: CustomFlowbiteTheme = {
        helperText: {
          root: {
            base: "mt-4 text-lg",
          },
        },
      };

      render(
        <ThemeProvider theme={theme}>
          <HelperText>Some helper text</HelperText>
        </ThemeProvider>,
      );

      expect(helperText()).toHaveClass("mt-4 text-lg");
    });

    it("should use custom `colors` classes", () => {
      const theme: CustomFlowbiteTheme = {
        helperText: {
          root: {
            colors: {
              gray: "text-purple-500",
            },
          },
        },
      };

      render(
        <ThemeProvider theme={theme}>
          <HelperText>Some helper text</HelperText>
        </ThemeProvider>,
      );

      expect(helperText()).toHaveClass("text-purple-500");
    });
  });
});

const helperText = () => screen.getByText("Some helper text", { exact: false });
