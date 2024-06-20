import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BottomNavigation } from "./BottomNavigation";

describe.concurrent("BottomNavigation", () => {
  it('BottomNavigation should have "data-testid=flowbite-bottom-navigation" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavTestId().forEach((bottomNavTestId) => {
      expect(bottomNavTestId).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "data-testid=flowbite-bottom-nav-item" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemTestId().forEach((bottomNavItemTest) => {
      expect(bottomNavItemTest).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "button" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemButton().forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "Home" in the document', async () => {
    render(<TestBottomNavigation />);

    homeTextInButton().forEach((homeText) => {
      expect(homeText).toBeInTheDocument();
    });
  });

  it('should have "attribute of type = button" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemTestId().forEach((buttonType) => {
      expect(buttonType).toHaveAttribute("type", "button");
    });
  });

  it("tooltip in document", async () => {
    render(<TestBottomNavigation />);

    expect(tooltips()).toBeInTheDocument();
  });

  it('svg icons in the document by "data-testid=flowbite-bottom-nav-icon"', async () => {
    render(<TestBottomNavigation />);

    imgByTestId().forEach((imgTestId) => {
      expect(imgTestId).toBeInTheDocument();
    });
  });

  it("first svg Icon in the Tooltip", async () => {
    render(<TestBottomNavigation />);

    expect(imgByTestId()[0]).toBeInTheDocument();
  });

  it("second svg Icon in the Tooltip", async () => {
    render(<TestBottomNavigation />);

    expect(imgByTestId()[1]).toBeInTheDocument();
  });

  it("third svg Icon outside of Tooltip", async () => {
    render(<TestBottomNavigation />);

    expect(imgByTestId()[2] as HTMLElement).toBeInTheDocument();
  });

  it("all svg Icon should have className of w-5", async () => {
    render(<TestBottomNavigation />);

    imgByTestId().forEach((imgByTest) => {
      expect(imgByTest).toHaveClass("w-5");
    });
  });

  it('first svg element selector using "document.querySelector=svg"', async () => {
    render(<TestBottomNavigation />);

    const svgImg = document.querySelectorAll("svg")[0] as SVGElement;

    expect(svgImg).toBeInTheDocument();
  });

  it('second svg element selector using "document.querySelector=svg"', async () => {
    render(<TestBottomNavigation />);

    const svgImg = document.querySelectorAll("svg")[1] as SVGElement;

    expect(svgImg).toBeInTheDocument();
  });

  it('third svg element selector using "document.querySelector=svg"', async () => {
    render(<TestBottomNavigation />);

    const svgImg = document.querySelectorAll("svg")[2] as SVGElement;

    expect(svgImg).toBeInTheDocument();
  });
});

const bottomNavTestId = () => screen.getAllByTestId("flowbite-bottom-navigation");
const bottomNavItemTestId = () => screen.getAllByTestId("flowbite-bottom-nav-item");
const bottomNavItemButton = () => screen.getAllByRole("button");
const homeTextInButton = () => screen.getAllByText("Home");
const tooltips = () => screen.getByTestId("flowbite-tooltip");
const imgByTestId = () => screen.getAllByTestId("flowbite-bottom-nav-icon");

const TestBottomNavigation = (): JSX.Element => {
  return (
    <div>
      <BottomNavigation>
        <BottomNavigation.Item label="Home" />
      </BottomNavigation>

      <BottomNavigation>
        <BottomNavigation.Item label="Home" showTooltip />
      </BottomNavigation>

      <BottomNavigation bordered>
        <BottomNavigation.Item label="Home" />
      </BottomNavigation>
    </div>
  );
};
