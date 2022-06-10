import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { Pagination } from '.';

describe.concurrent('Pagination', () => {
  describe('Previous button', () => {
    describe('when clicked', () => {
      describe('on first page', () => {
        it('should do nothing', () => {
          const { getAllByRole } = render(<PaginationTest />);

          let buttons = getAllByRole('button');
          let pages = pagesInPagination(buttons);
          const previousButton = buttons[0];

          userEvent.click(previousButton);

          const page = currentPage(getAllByRole('listitem'));
          buttons = getAllByRole('button');
          pages = pagesInPagination(buttons);

          expect(pages).toEqual([1, 2, 3, 4]);
          expect(page).toEqual(1);
        });
      });

      it('should go to previous page', () => {
        const { getAllByRole } = render(<PaginationTest />);

        let buttons = getAllByRole('button');
        let pages = pagesInPagination(buttons);
        const nextButton = buttons[buttons.length - 1];
        const previousButton = buttons[0];

        userEvent.click(nextButton);
        userEvent.click(previousButton);

        const page = currentPage(getAllByRole('listitem'));
        buttons = getAllByRole('button');
        pages = pagesInPagination(buttons);

        expect(pages).toEqual([1, 2, 3, 4]);
        expect(page).toEqual(1);
      });
    });
  });

  describe('numbered buttons', () => {
    describe('when clicked', () => {
      it('should go to nth page clicked', () => {
        const { getAllByRole } = render(<PaginationTest />);

        let buttons = getAllByRole('button');
        let pages = pagesInPagination(buttons);

        userEvent.click(buttons[buttons.length - 2]);

        const page = currentPage(getAllByRole('listitem'));
        buttons = getAllByRole('button');
        pages = pagesInPagination(buttons);

        expect(pages).toEqual([1, 2, 3, 4, 5]);
        expect(page).toEqual(4);
      });
    });
  });

  describe('Next button', () => {
    describe('when clicked', () => {
      describe('on last page', () => {
        it('should do nothing', () => {
          const { getAllByRole } = render(<PaginationTest />);

          let buttons = getAllByRole('button');
          let pages = pagesInPagination(buttons);
          const nextButton = buttons[buttons.length - 1];

          Array(10)
            .fill(1)
            .forEach(() => userEvent.click(nextButton));

          const page = currentPage(getAllByRole('listitem'));
          buttons = getAllByRole('button');
          pages = pagesInPagination(buttons);

          expect(pages).toEqual([2, 3, 4, 5]);
          expect(page).toEqual(5);
        });
      });

      it('should go to next page', () => {
        const { getAllByRole } = render(<PaginationTest />);

        let buttons = getAllByRole('button');
        let pages = pagesInPagination(buttons);
        const nextButton = buttons[buttons.length - 1];

        userEvent.click(nextButton);

        const page = currentPage(getAllByRole('listitem'));
        buttons = getAllByRole('button');
        pages = pagesInPagination(buttons);

        expect(pages).toEqual([1, 2, 3, 4, 5]);
        expect(page).toEqual(2);
      });
    });
  });

  describe('Navigation template', () => {
    it("shouldn't display indexed buttons", () => {
      const { getAllByRole } = render(
        <Pagination currentPage={1} layout="navigation" onPageChange={() => undefined} totalPages={5} />,
      );

      const buttons = getAllByRole('button');
      const pages = pagesInPagination(buttons);

      expect(pages).toHaveLength(0);
    });
  });

  describe('Table template', () => {
    it("shouldn't display indexed buttons", () => {
      const { getAllByRole } = render(
        <Pagination currentPage={1} layout="table" onPageChange={() => undefined} totalPages={5} />,
      );

      const buttons = getAllByRole('button');
      const pages = pagesInPagination(buttons);

      expect(pages).toHaveLength(0);
    });
  });
});

const PaginationTest: FC = (): JSX.Element => {
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(page);
  }, [page]);

  return <Pagination currentPage={page} onPageChange={onPageChange} showIcons totalPages={5} />;
};

const currentPage = (pagination: HTMLElement[]): number => {
  return parseInt(pagination.find((elem) => elem.getAttribute('aria-current') === 'page')?.textContent ?? '0');
};

const pagesInPagination = (pagination: HTMLElement[]): number[] => {
  return pagination
    .map((page) => page.textContent ?? '')
    .map((page) => parseInt(page))
    .filter((page) => Number.isInteger(page));
};
