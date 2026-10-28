import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MegaMenu } from "./MegaMenu";
import { MegaMenuDropdown } from "./MegaMenuDropdown";
import { MegaMenuDropdownToggle } from "./MegaMenuDropdownToggle";

describe("Components / MegaMenu", () => {
  it("should hide/show <MegaMenuDropdown> on click <MegaMenuDropdownToggle>", async () => {
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

  it("should pair each <MegaMenuDropdownToggle> with its own <MegaMenuDropdown>", async () => {
    render(<MultipleMegaMenuTest />);

    const [companyToggle, marketingToggle] = screen.getAllByRole("button");
    const [companyDropdown, marketingDropdown] = screen.getAllByRole("menu");

    expect(companyToggle.getAttribute("aria-controls")).toEqual(companyDropdown.id);
    expect(marketingToggle.getAttribute("aria-controls")).toEqual(marketingDropdown.id);

    expect(companyDropdown.getAttribute("aria-labelledby")).toEqual(companyToggle.id);
    expect(marketingDropdown.getAttribute("aria-labelledby")).toEqual(marketingToggle.id);
  });

  it("should hide/show only its own <MegaMenuDropdown> on click <MegaMenuDropdownToggle>", async () => {
    const user = userEvent.setup();
    render(<MultipleMegaMenuTest />);

    const [companyToggle, marketingToggle] = screen.getAllByRole("button");
    const [companyDropdown, marketingDropdown] = screen.getAllByRole("menu");

    expect(companyDropdown).not.toHaveClass("hidden");
    expect(marketingDropdown).not.toHaveClass("hidden");

    await user.click(marketingToggle);

    expect(marketingDropdown).toHaveClass("hidden");
    expect(marketingToggle).toHaveAttribute("aria-expanded", "false");
    expect(companyDropdown).not.toHaveClass("hidden");
    expect(companyToggle).toHaveAttribute("aria-expanded", "true");

    await user.click(marketingToggle);

    expect(marketingDropdown).not.toHaveClass("hidden");
    expect(marketingToggle).toHaveAttribute("aria-expanded", "true");
  });

  it("should close the other <MegaMenuDropdown> when one is opened", async () => {
    const user = userEvent.setup();
    render(<MultipleMegaMenuTest />);

    const [companyToggle, marketingToggle] = screen.getAllByRole("button");
    const [companyDropdown, marketingDropdown] = screen.getAllByRole("menu");

    // both panels are declared without `hidden`, so they start open
    await user.click(companyToggle);
    await user.click(marketingToggle);

    expect(companyDropdown).toHaveClass("hidden");
    expect(marketingDropdown).toHaveClass("hidden");

    await user.click(companyToggle);

    expect(companyDropdown).not.toHaveClass("hidden");
    expect(companyToggle).toHaveAttribute("aria-expanded", "true");
    expect(marketingDropdown).toHaveClass("hidden");
    expect(marketingToggle).toHaveAttribute("aria-expanded", "false");

    await user.click(marketingToggle);

    expect(marketingDropdown).not.toHaveClass("hidden");
    expect(marketingToggle).toHaveAttribute("aria-expanded", "true");
    expect(companyDropdown).toHaveClass("hidden");
    expect(companyToggle).toHaveAttribute("aria-expanded", "false");
  });

  it("should preserve pairing when a standalone dropdown opens between separated toggle and panel pairs", async () => {
    const user = userEvent.setup();
    render(
      <MegaMenu>
        <div>
          <MegaMenuDropdownToggle>Company</MegaMenuDropdownToggle>
          <MegaMenuDropdown toggle={<>Standalone</>}>
            <p>Standalone content</p>
          </MegaMenuDropdown>
          <MegaMenuDropdownToggle>Marketing</MegaMenuDropdownToggle>
        </div>
        <MegaMenuDropdown className="hidden">
          <p>Company content</p>
        </MegaMenuDropdown>
        <MegaMenuDropdown className="hidden">
          <p>Marketing content</p>
        </MegaMenuDropdown>
      </MegaMenu>,
    );

    const companyToggle = screen.getByRole("button", { name: "Company" });
    const marketingToggle = screen.getByRole("button", { name: "Marketing" });
    const companyDropdown = screen.getByText("Company content").parentElement;
    const marketingDropdown = screen.getByText("Marketing content").parentElement;

    await user.click(screen.getByRole("button", { name: "Standalone" }));
    expect(screen.getByText("Standalone content")).toBeVisible();

    await user.click(marketingToggle);

    expect(marketingToggle).toHaveAttribute("aria-controls", marketingDropdown?.id);
    expect(marketingDropdown).toHaveAttribute("aria-labelledby", marketingToggle.id);
    expect(marketingDropdown).not.toHaveClass("hidden");
    expect(companyDropdown).toHaveClass("hidden");

    await user.click(companyToggle);

    expect(companyToggle).toHaveAttribute("aria-controls", companyDropdown?.id);
    expect(companyDropdown).toHaveAttribute("aria-labelledby", companyToggle.id);
    expect(companyDropdown).not.toHaveClass("hidden");
    expect(marketingDropdown).toHaveClass("hidden");
    expect(marketingToggle).toHaveAttribute("aria-expanded", "false");
  });

  it("should hide/show <MegaMenuDropdown toggle={..}> on click toggle", async () => {
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
      <MegaMenuDropdownToggle>Click</MegaMenuDropdownToggle>
      <MegaMenuDropdown>
        <p>Test</p>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}

function MultipleMegaMenuTest() {
  return (
    <MegaMenu>
      <MegaMenuDropdownToggle>Company</MegaMenuDropdownToggle>
      <MegaMenuDropdown>
        <p>Company content</p>
      </MegaMenuDropdown>
      <MegaMenuDropdownToggle>Marketing</MegaMenuDropdownToggle>
      <MegaMenuDropdown>
        <p>Marketing content</p>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}

function MegaMenuDropdownOnlyTest() {
  return (
    <MegaMenu>
      <MegaMenuDropdown toggle={<>Toggle</>}>
        <p>Test</p>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}
