import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeModeScript } from "./ThemeModeScript";

describe("Components / ThemeModeScript", () => {
  it("should insert `<script>`", () => {
    render(
      <>
        <ThemeModeScript />
      </>,
    );

    expect(document.querySelector("script")).toBeDefined();
  });
});
