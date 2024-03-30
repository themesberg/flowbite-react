import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MegaMenu } from "./MegaMenu";

describe("Components / MegaMenu", () => {
  it("should hide/show <MegaMenu.Dropdown> on click <MegaMenu.DropdownToggle>", async () => {
    const user = userEvent.setup();
    render(<MegaMenuTest />);

    const dropdownToggle = screen.getByRole("button");
    const dropdown = screen.getByRole("menu");

    expect(dropdownToggle.getAttribute("aria-controls")).toEqual(dropdown.id);
    expect(dropdownToggle.id).toEqual(dropdown.getAttribute("aria-labelledby"));
    expect(screen.getByRole("button", { expanded: true })).toBeInTheDocument();
    expect(dropdown).not.toHaveClass("hidden");

    await user.click(dropdownToggle);

    expect(screen.getByRole("button", { expanded: false })).toBeInTheDocument();
    expect(dropdown).toHaveClass("hidden");

    await user.click(dropdownToggle);

    expect(screen.getByRole("button", { expanded: true })).toBeInTheDocument();
    expect(dropdown).not.toHaveClass("hidden");
  });

  it("should hide/show <MegaMenu.Dropdown toggle={..}> on click toggle", async () => {
    const user = userEvent.setup();
    render(<MegaMenuDropdownOnlyTest />);

    const dropdownToggle = screen.getByRole("button");

    expect(screen.getByRole("button", { expanded: false })).toBeInTheDocument();

    await user.click(dropdownToggle);

    const dropdown = screen.getByRole("menu");

    expect(dropdown.getAttribute("aria-labelledby")).toEqual(dropdownToggle.id);
    expect(dropdownToggle.getAttribute("aria-controls")).toEqual(dropdown.id);
    expect(screen.getByRole("button", { expanded: true })).toBeInTheDocument();
    expect(dropdown).not.toHaveClass("hidden");

    await user.click(dropdownToggle);

    expect(screen.getByRole("button", { expanded: false })).toBeInTheDocument();
  });
});

function MegaMenuTest() {
  return (
    <MegaMenu>
      <MegaMenu.DropdownToggle>Click</MegaMenu.DropdownToggle>
      <MegaMenu.Dropdown>
        <p>Test</p>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}

function MegaMenuDropdownOnlyTest() {
  return (
    <MegaMenu>
      <MegaMenu.Dropdown toggle={<>Toggle</>}>
        <p>Test</p>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}
