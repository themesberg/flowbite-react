import { render } from "@testing-library/react";
import { FaPhoneAlt } from "react-icons/fa";
import { describe, expect, it } from "vitest";
import { PhoneInput } from "./PhoneInput";

describe.concurrent("Components / PhoneInput", () => {
  describe.concurrent("A11y", () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<PhoneInput />).getByRole("textbox");

      expect(textInput).toBeInTheDocument();
    });

    it("should have Left Icon", () => {
      const leftPage = render(<PhoneInput />).getAllByTestId("left-icon");

      leftPage.forEach((leftIcon) => {
        expect(leftIcon).toBeInTheDocument();
      });
    });

    it("should have Right Icon", () => {
      const rightPage = render(<PhoneInput rightIcon={FaPhoneAlt} />).getAllByTestId("right-icon");

      rightPage.forEach((rightIcon) => {
        expect(rightIcon).toBeInTheDocument();
      });
    });
  });
});
