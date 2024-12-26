import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { describe, expect, it } from "vitest";
import { Flowbite, type CustomFlowbiteTheme } from "../Flowbite";
import type { TimelineProps } from "./Timeline";
import { Timeline } from "./Timeline";

describe("Components / Timeline", () => {
  describe("Rendering horizontal mode", () => {
    it("should remove margin-top when do not icon", () => {
      render(<TestTimelineNoIcon horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).not.toHaveClass("mt-1.5");
    });

    it("should show icon when render", () => {
      render(<TestTimelineWithIcon horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML("svg");
    });

    it("should render custom inner content when using render prop", () => {
      render(<TestTimelineWithRenderProp horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML("img");
    });

    it("should use `horizontal` classes of content if provided", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon horizontal={true} />
        </Flowbite>,
      );

      expect(timelineContent()).toHaveClass(horizontalContentClass);
    });

    it("should not use `vertical` classes of content if provided", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon horizontal={true} />
        </Flowbite>,
      );

      expect(timelineContent()).not.toHaveClass(verticalContentClass);
    });
  });
  describe("Rendering vertical mode", () => {
    it("should have margin-top when do not icon", () => {
      render(<TestTimelineNoIcon horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toHaveClass("mt-1.5");
    });

    it("should show icon when render", () => {
      render(<TestTimelineWithIcon horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML("svg");
    });

    it("should render custom inner content when using render prop", () => {
      render(<TestTimelineWithRenderProp horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML("img");
    });

    it("should use `vertical` classes of content if provided", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon />
        </Flowbite>,
      );

      expect(timelineContent()).toHaveClass(verticalContentClass);
    });

    it("should not use `horizontal` classes of content if provided", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon />
        </Flowbite>,
      );

      expect(timelineContent()).not.toHaveClass(horizontalContentClass);
    });
  });
  describe("Theme", () => {
    it("should use `base` classes of content in horizontal mode", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon horizontal={true} />
        </Flowbite>,
      );

      expect(timelineContent()).toHaveClass(baseContentClass);
    });

    it("should use `base` classes of content in vertical mode", () => {
      render(
        <Flowbite theme={{ theme }}>
          <TestTimelineNoIcon />
        </Flowbite>,
      );

      expect(timelineContent()).toHaveClass(baseContentClass);
    });
  });
});

const TestTimelineNoIcon: FC<TimelineProps> = ({ horizontal, className }): JSX.Element => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const TestTimelineWithIcon: FC<TimelineProps> = ({ horizontal, className }): JSX.Element => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <Timeline.Item>
        <Timeline.Point icon={IconSVG} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const TestTimelineWithRenderProp: FC<TimelineProps> = ({ horizontal, className }): JSX.Element => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <Timeline.Item>
        <Timeline.Point render={() => <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const IconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-4 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M
      5 13l4 4L19 7"
    />
  </svg>
);

const timelinePoint = () => screen.getByTestId("timeline-point");
const timelineContent = () => screen.getByTestId("timeline-content");

const baseContentClass = "dummy-base-content";
const verticalContentClass = "dummy-vertical-content";
const horizontalContentClass = "dummy-horizontal-content";

const theme: CustomFlowbiteTheme = {
  timeline: {
    item: {
      content: {
        root: {
          base: baseContentClass,
          vertical: verticalContentClass,
          horizontal: horizontalContentClass,
        },
      },
    },
  },
};
