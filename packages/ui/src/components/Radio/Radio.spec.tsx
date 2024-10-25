import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flowbite, type CustomFlowbiteTheme } from "../Flowbite";
import { Radio } from "./Radio";

describe("Components / Radio", () => {
  describe("A11y", () => {
    it('should have role="radio" by default', () => {
      render(<Radio />);
      const radio = screen.getByRole("radio");

      expect(radio).toBeInTheDocument();
    });
  });

  describe("Theme", () => {
    it("should use custom `base` classes", () => {
      const theme: CustomFlowbiteTheme = {
        radio: {
          root: {
            base: "bg-yellow-400 dark:bg-yellow-40",
          },
        },
      };
      render(
        <Flowbite theme={theme}>
          <Radio />
        </Flowbite>,
      );

      const radio = screen.getByRole("radio");
      expect(radio).toHaveClass("bg-yellow-400 dark:bg-yellow-40");
    });
  });
});
