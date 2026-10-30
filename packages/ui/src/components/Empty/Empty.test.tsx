import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../theme/provider";
import type { CustomFlowbiteTheme } from "../../types";
import { Empty } from "./Empty";

describe("Components / Empty", () => {
  describe("Rendering", () => {
    it("should render the default empty state", () => {
      render(<Empty />);

      expect(empty()).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "No data found" })).toBeInTheDocument();
      expect(screen.getByText("There is nothing to display.")).toBeInTheDocument();
    });

    it("should render custom title and description", () => {
      render(<Empty description="Create a project to get started." title="No projects yet" />);

      expect(screen.getByRole("heading", { name: "No projects yet" })).toBeInTheDocument();
      expect(screen.getByText("Create a project to get started.")).toBeInTheDocument();
    });

    it("should render children", () => {
      render(
        <Empty>
          <button type="button">Create project</button>
        </Empty>,
      );

      expect(screen.getByRole("button", { name: "Create project" })).toBeInTheDocument();
    });

    it("should not render title or description when they are empty", () => {
      render(<Empty description={null} title={null} />);

      expect(screen.queryByRole("heading")).not.toBeInTheDocument();
      expect(screen.queryByText("There is nothing to display.")).not.toBeInTheDocument();
    });
  });

  describe("Classname", () => {
    it("should merge not overwrite", () => {
      render(<Empty className="bg-red-500" />);

      expect(empty()).toHaveClass("bg-red-500");
    });
  });

  describe("A11y", () => {
    it("should allow `aria-label`", () => {
      render(<Empty aria-label="Empty projects" />);

      expect(empty()).toHaveAccessibleName("Empty projects");
    });
  });

  describe("Theme", () => {
    it("should use custom root classes", () => {
      const theme: CustomFlowbiteTheme = {
        empty: {
          root: {
            base: "bg-cyan-100",
          },
        },
      };
      render(
        <ThemeProvider theme={theme}>
          <Empty />
        </ThemeProvider>,
      );

      expect(empty()).toHaveClass("bg-cyan-100");
    });

    it("should use custom icon classes", () => {
      const theme: CustomFlowbiteTheme = {
        empty: {
          icon: "text-cyan-200",
        },
      };
      render(
        <ThemeProvider theme={theme}>
          <Empty />
        </ThemeProvider>,
      );

      expect(icon()).toHaveClass("text-cyan-200");
    });

    it("should use custom title classes", () => {
      const theme: CustomFlowbiteTheme = {
        empty: {
          title: "text-cyan-300",
        },
      };
      render(
        <ThemeProvider theme={theme}>
          <Empty />
        </ThemeProvider>,
      );

      expect(screen.getByRole("heading", { name: "No data found" })).toHaveClass("text-cyan-300");
    });

    it("should use custom description classes", () => {
      const theme: CustomFlowbiteTheme = {
        empty: {
          description: "text-cyan-400",
        },
      };
      render(
        <ThemeProvider theme={theme}>
          <Empty />
        </ThemeProvider>,
      );

      expect(screen.getByText("There is nothing to display.")).toHaveClass("text-cyan-400");
    });
  });
});

const empty = () => screen.getByTestId("flowbite-empty");

const icon = () => empty().querySelector("svg");
