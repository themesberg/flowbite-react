import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Components / Skeleton", () => {
  it("should have default Skeleton in Document", async () => {
    render(<Skeleton />);

    expect(defaultSkeleton()).toBeInTheDocument();
  });

  it("should have Skeleton.Card in the document", async () => {
    render(<Skeleton.Card />);

    expect(skeletonCard()).toBeInTheDocument();
  });

  it("should have Skeleton.Image in the document", async () => {
    render(<Skeleton.Image />);

    expect(skeletonImg()).toBeInTheDocument();
  });

  it("should have Skeleton.List in the document", async () => {
    render(<Skeleton.List />);

    expect(skeletonList()).toBeInTheDocument();
  });

  it("should have Skeleton.Testimonial in the document", async () => {
    render(<Skeleton.Testimonial />);

    expect(skeletonTestimonial()).toBeInTheDocument();
  });

  it("should have Skeleton.Video in the document", async () => {
    render(<Skeleton.Video />);

    expect(skeletonVideo()).toBeInTheDocument();
  });

  it('should have role="Status" in the document', async () => {
    render(<Skeleton />);

    getSkeletonByStatus().forEach((status) => {
      expect(status).toBeInTheDocument();
    });
  });
});

const defaultSkeleton = () => screen.getByTestId("flowbite-skeleton");
const skeletonCard = () => screen.getByTestId("flowbite-skeleton-card");
const skeletonImg = () => screen.getByTestId("flowbite-skeleton-image");
const skeletonList = () => screen.getByTestId("flowbite-skeleton-list");
const skeletonTestimonial = () => screen.getByTestId("flowbite-skeleton-testimonial");
const skeletonVideo = () => screen.getByTestId("flowbite-skeleton-video");
const getSkeletonByStatus = () => screen.getAllByRole("status");
