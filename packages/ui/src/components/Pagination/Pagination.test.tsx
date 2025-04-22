import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { describe, expect, it } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  describe("Keyboard interactions", () => {
    it("should do nothing when `Space` is pressed while Previous button is focused on 1st page", async () => {
      const user = userEvent.setup();
      render(<PaginationTestFiveElements />);

      await user.click(previousButton());

      expect(pages()).toEqual([1, 2, 3, 4, 5]);
      expect(currentPage()).toEqual(1);
    });

    it("should go to previous page when `Space` is pressed while Previous button is focused", async () => {
      const user = userEvent.setup();
      render(<PaginationTestFiveElements />);

      await user.click(nextButton());
      expect(currentPage()).toEqual(2);

      await user.click(previousButton());

      expect(pages()).toEqual([1, 2, 3, 4, 5]);
      expect(currentPage()).toEqual(1);
    });

    it("should do nothing when `Space` is pressed while Next button is focused while on last page", async () => {
      const user = userEvent.setup();
      render(<PaginationTestFiveElements />);

      for (let i = 0; i < 10; ++i) {
        await user.click(nextButton());
      }

      expect(pages()).toEqual([1, 2, 3, 4, 5]);
      expect(currentPage()).toEqual(5);
    });

    it("should go to next page when `Space` is pressed while Next button is focused", async () => {
      const user = userEvent.setup();
      render(<PaginationTestFiveElements />);

      await user.click(nextButton());

      expect(pages()).toEqual([1, 2, 3, 4, 5]);
      expect(currentPage()).toEqual(2);
    });

    it("should go to nth page when `Space` is pressed while Nth page button is focused", async () => {
      const user = userEvent.setup();
      render(<PaginationTestTenElements />);

      const nthButton = buttons()[buttons().length - 3];
      await user.click(nthButton);
      expect(currentPage()).toEqual(4);
      expect(pages()).toEqual([2, 3, 4, 5, 6]);
    });

    it("should disable previous button when on 1st page", async () => {
      render(<PaginationTestFiveElements />);

      const firstButton = buttons()[0];

      expect(currentPage()).toEqual(1);
      expect(firstButton).toBeDisabled();
    });

    it("should disable next button when on last page", async () => {
      const user = userEvent.setup();
      render(<PaginationTestFiveElements />);

      const lastButton = buttons()[buttons().length - 1];

      for (let i = 0; i < 5; ++i) {
        await user.click(nextButton());
      }

      expect(currentPage()).toEqual(5);
      expect(lastButton).toBeDisabled();
    });
  });

  it('should "move" the slider when more then 3 pages are changed', async () => {
    const user = userEvent.setup();
    render(<PaginationTestTenElements />);
    await user.click(nextButton());
    await user.click(nextButton());
    await user.click(nextButton());
    await user.click(nextButton());

    expect(currentPage()).toEqual(5);
    expect(pages()).toEqual([3, 4, 5, 6, 7]);
  });

  describe("Table Layout", () => {
    it("should show the first visible item, the last visible item, and the total items", () => {
      render(<PaginationTestTable />);
      const { firstItem, lastItem, totalItems } = tablePaginationState();
      expect(firstItem).toEqual(1);
      expect(lastItem).toEqual(10);
      expect(totalItems).toEqual(95);
    });

    it("clicking next should increment the page offset by 1.", async () => {
      const user = userEvent.setup();
      render(<PaginationTestTable />);
      await user.click(nextButton());
      const { firstItem, lastItem, totalItems } = tablePaginationState();
      expect(firstItem).toEqual(11);
      expect(lastItem).toEqual(20);
      expect(totalItems).toEqual(95);
    });

    it("should disable previous button when on 1st page", () => {
      render(<PaginationTestTable />);
      const firstButton = buttons()[0];
      expect(firstButton).toBeDisabled();
    });

    it("should enable previous button on subsequent pages", async () => {
      const user = userEvent.setup();
      render(<PaginationTestTable />);
      await user.click(nextButton());
      await user.click(nextButton());
      expect(tablePaginationState().firstItem).toEqual(21);
      await user.click(previousButton());
      expect(tablePaginationState().firstItem).toEqual(11);
      await user.click(previousButton());
      expect(tablePaginationState().firstItem).toEqual(1);
    });

    it("should disable next button when on last page", async () => {
      const user = userEvent.setup();
      render(<PaginationTestTable />);
      for (let i = 0; i < 9; ++i) {
        await user.click(nextButton());
      }

      const { firstItem, lastItem, totalItems } = tablePaginationState();
      expect(firstItem).toEqual(91);
      expect(lastItem).toEqual(95);
      expect(totalItems).toEqual(95);
      const lastButton = buttons()[buttons().length - 1];
      expect(lastButton).toBeDisabled();
    });
  });

  describe("Props", () => {
    it('should not display numbered buttons when `layout="navigation"`', () => {
      render(<Pagination currentPage={1} layout="navigation" onPageChange={() => undefined} totalPages={5} />);

      expect(pages()).toHaveLength(0);
    });

    it('should display numbered buttons when `layout="table"`', () => {
      render(<PaginationTestTable />);

      expect(pages()).toHaveLength(0);
    });

    it("should change previous and next text when provided", () => {
      render(
        <Pagination
          currentPage={1}
          layout="navigation"
          onPageChange={() => undefined}
          totalPages={5}
          previousLabel="Go back"
          nextLabel="Go forward"
        ></Pagination>,
      );

      expect(previousButton()).toHaveTextContent("Go back");
      expect(nextButton()).toHaveTextContent("Go forward");
    });
  });
});

function PaginationTestFiveElements() {
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(page);
  }, [page]);

  return <Pagination currentPage={page} onPageChange={onPageChange} showIcons totalPages={5} />;
}

function PaginationTestTenElements() {
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(page);
  }, [page]);

  return <Pagination currentPage={page} onPageChange={onPageChange} showIcons totalPages={10} />;
}

function PaginationTestTable() {
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(page);
  }, [page]);

  return (
    <Pagination
      layout="table"
      currentPage={page}
      onPageChange={onPageChange}
      showIcons
      itemsPerPage={10}
      totalItems={95}
    />
  );
}

const buttons = () => screen.getAllByRole("button");

const pages = () => {
  return screen
    .getAllByRole("listitem")
    .map((page) => page.textContent ?? "")
    .map((page) => Number.parseInt(page))
    .filter((page) => Number.isInteger(page));
};

const currentPage = () => {
  const currentPageElement = screen
    .getAllByRole("listitem")
    .find((elem) => elem.getAttribute("aria-current") === "page");

  expect(currentPageElement).toBeInTheDocument();
  return Number.parseInt(currentPageElement?.textContent ?? "0");
};

const tablePaginationState = () => {
  const firstItemElement = screen
    .getAllByRole("status")
    .find((elem) => elem.getAttribute("aria-label") === "Table Pagination");
  const paginationValues = firstItemElement?.textContent?.match(/\d+/g);
  if (!paginationValues || paginationValues?.length !== 3) return { firstItem: null, lastItem: null, totalItems: null };
  return {
    firstItem: parseInt(paginationValues[0]),
    lastItem: parseInt(paginationValues[1]),
    totalItems: parseInt(paginationValues[2]),
  };
};

const nextButton = () => buttons()[buttons().length - 1];

const previousButton = () => buttons()[0];
