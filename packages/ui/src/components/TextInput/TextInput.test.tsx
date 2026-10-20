import { fireEvent, render, screen } from "@testing-library/react";
import { HiEye } from "react-icons/hi";
import { describe, expect, it, vi } from "vitest";
import { TextInput } from "./TextInput";

describe.concurrent("Components / Text input", () => {
  describe.concurrent("A11y", () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<TextInput />).getByRole("textbox");

      expect(textInput).toBeInTheDocument();
    });

    it("should have Icon if selected", () => {
      const page = render(<TextInput rightIcon={HiEye} />).getByTestId("right-icon");

      expect(page).toBeInTheDocument();
    });

    it("should trigger onRightIconClick when right icon is clicked", () => {
      const handleClick = vi.fn();

      render(<TextInput rightIcon={HiEye} onRightIconClick={handleClick} />);
      const rightIconWrapper = screen.getByTestId("right-icon");

      fireEvent.click(rightIconWrapper);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});