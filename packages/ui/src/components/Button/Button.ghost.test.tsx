import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../theme/provider";
import type { CustomFlowbiteTheme } from "../../types";
import { Button } from "./Button";

describe("Components / Button / ghost", () => {
  it("should use ghost color classes instead of solid color classes", () => {
    const theme: CustomFlowbiteTheme = {
      button: {
        color: {
          red: "bg-red-700",
        },
        ghostColor: {
          red: "text-red-700 hover:bg-red-100",
        },
      },
    };

    render(
      <ThemeProvider theme={theme}>
        <Button color="red" ghost>
          Delete
        </Button>
      </ThemeProvider>,
    );

    const ghostButton = screen.getByRole("button", { name: "Delete" });

    expect(ghostButton).toHaveClass("text-red-700", "hover:bg-red-100");
    expect(ghostButton).not.toHaveClass("bg-red-700");
  });

  it("should not forward the ghost prop to the DOM", () => {
    render(<Button ghost>Ghost</Button>);

    expect(screen.getByRole("button", { name: "Ghost" })).not.toHaveAttribute("ghost");
  });
});
