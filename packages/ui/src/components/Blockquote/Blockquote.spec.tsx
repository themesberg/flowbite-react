import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Flowbite, type CustomFlowbiteTheme } from "../Flowbite";
import { Blockquote } from "./Blockquote";

describe("Components / Blockquote", () => {
  describe("Theme", () => {
    it("should use custom `base` classes", () => {
      const theme: CustomFlowbiteTheme = {
        blockquote: {
          root: {
            base: "bg-yellow-400 dark:bg-yellow-40",
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Blockquote />
        </Flowbite>,
      );
      expect(blockquote()).toBeInTheDocument();
      expect(blockquote()).toHaveClass("bg-yellow-400 dark:bg-yellow-40");
    });
  });
  describe("Rendering", () => {
    it("should render when `children={0}`", () => {
      render(<Blockquote>0</Blockquote>);
      expect(blockquote()).toHaveTextContent("0");
    });
  });
});

const blockquote = () => screen.getByTestId("flowbite-blockquote");
