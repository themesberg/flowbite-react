// @vitest-environment jsdom
import { cleanup, fireEvent, render } from "@testing-library/react";
import { HiEye } from "react-icons/hi";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TextInput } from "./TextInput";

describe("Components / Text input", () => {
  afterEach(() => {
    cleanup();
  });

  describe("A11y", () => {
    it('should have `role="textbox"` by default', () => {
      const { getByRole } = render(<TextInput />);

      expect(getByRole("textbox")).toBeDefined();
    });

    it("should have Icon if selected", () => {
      const { getByTestId } = render(<TextInput rightIcon={HiEye} />);

      expect(getByTestId("right-icon")).toBeDefined();
    });

    it("should trigger onRightIconClick when right icon is clicked", () => {
      const handleClick = vi.fn();
      const { getByTestId } = render(<TextInput rightIcon={HiEye} onRightIconClick={handleClick} />);

      fireEvent.click(getByTestId("right-icon"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
