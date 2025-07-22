import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { getThemeModeScript, ThemeModeScript } from "./mode-script";

describe("ThemeModeScript", () => {
  it("should render with default props", () => {
    const { container } = render(<ThemeModeScript />);
    const script = container.querySelector("script");

    expect(script).toHaveAttribute("data-flowbite-theme-mode-script");
    expect(script?.innerHTML).toContain("flowbite-theme-mode");
    expect(script?.innerHTML).toContain("light");
  });

  it("should render with custom mode", () => {
    const { container } = render(<ThemeModeScript mode="dark" />);
    const script = container.querySelector("script");

    expect(script?.innerHTML).toContain('"dark"');
  });

  it("should render with custom defaultMode", () => {
    const { container } = render(<ThemeModeScript defaultMode="dark" />);
    const script = container.querySelector("script");

    expect(script?.innerHTML).toContain('"dark"');
  });

  it("should render with custom localStorageKey", () => {
    const { container } = render(<ThemeModeScript localStorageKey="custom-key" />);
    const script = container.querySelector("script");

    expect(script?.innerHTML).toContain("custom-key");
  });

  it("should include prefix when version is 3", () => {
    const { container } = render(<ThemeModeScript prefix="custom-" version={3} />);
    const script = container.querySelector("script");

    expect(script?.innerHTML).toContain('const className = "custom-dark"');
  });

  it("should not include prefix when version is 4", () => {
    const { container } = render(<ThemeModeScript prefix="custom-" version={4} />);
    const script = container.querySelector("script");

    expect(script?.innerHTML).toContain('const className = "dark"');
  });
});

describe("getThemeModeScript", () => {
  it("should return the correct script for prefix and version 3", () => {
    const script = getThemeModeScript({ prefix: "custom-", version: 3 });
    expect(script).toContain('const className = "custom-dark"');
  });

  it("should return the correct script for prefix and version 4", () => {
    const script = getThemeModeScript({ prefix: "custom-", version: 4 });
    expect(script).toContain('const className = "dark"');
  });

  it("should return the correct script for version 3", () => {
    const script = getThemeModeScript({ version: 3 });
    expect(script).toContain('const className = "dark"');
  });

  it("should return the correct script for version 4", () => {
    const script = getThemeModeScript({ version: 4 });
    expect(script).toContain('const className = "dark"');
  });
});
