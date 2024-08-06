import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flowbite, type CustomFlowbiteTheme } from "../Flowbite";
import { Checkbox } from "./Checkbox";

describe("Components / Checkbox", () => {
  describe("A11y", () => {
    it('should have role="checkbox" by default', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe("Theme", () => {
    it("should use custom `base` classes", () => {
      const theme: CustomFlowbiteTheme = {
        checkbox: {
          root: {
            base: "bg-yellow-400 dark:bg-yellow-40",
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Checkbox />
        </Flowbite>,
      );

      const checkbox = screen.getByRole("checkbox");
      expect(checkbox).toHaveClass("bg-yellow-400 dark:bg-yellow-40");
    });
  });
});
