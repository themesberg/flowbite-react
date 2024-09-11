import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HR } from "./HR";

describe.concurrent("Components / HR", () => {
  it("should have data-testid='flowbite-hr' in the document", () => {
    const defaultHRTestId = render(<HR />).getByTestId("flowbite-hr");

    expect(defaultHRTestId).toBeInTheDocument();
  });

  it("should have data-testid='flowbite-hr-icon' in the document", () => {
    const iconHRTestId = render(<HR.Icon />).getByTestId("flowbite-hr-icon");

    expect(iconHRTestId).toBeInTheDocument();
  });

  it("should have data-testid='flowbite-hr-square' in the document", () => {
    const squareHRTestId = render(<HR.Square />).getByTestId("flowbite-hr-square");

    expect(squareHRTestId).toBeInTheDocument();
  });

  it("should have data-testid='flowbite-hr-text' in the document", () => {
    const textHRTestId = render(<HR.Text text="or" />).getByTestId("flowbite-hr-text");

    expect(textHRTestId).toBeInTheDocument();
  });

  it("should have 'role=separator' in the document", () => {
    const separatorTextHRTestId = render(<HR.Text text="or" />).getAllByRole("separator");

    separatorTextHRTestId.forEach((separator) => {
      expect(separator).toBeInTheDocument();
    });
  });

  it("should have data-testid='flowbite-hr-trimmed' in the document", () => {
    const getByDisplayValueHRTestId = render(<HR.Trimmed />).getByTestId("flowbite-hr-trimmed");

    expect(getByDisplayValueHRTestId).toBeInTheDocument();
  });
});
