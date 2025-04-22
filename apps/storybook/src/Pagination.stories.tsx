import type { Meta, StoryFn } from "@storybook/react";
import type { PaginationProps } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  DefaultPaginationProps,
  TablePaginationProps,
} from "../../../packages/ui/dist/components/Pagination/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  decorators: [
    (Story): JSX.Element => (
      <div className="flex items-center justify-center text-center">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn<PaginationProps> = (props) => {
  const { currentPage = 1, layout = "pagination" } = props;

  const [page, setPage] = useState(currentPage);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  if (layout === "table") {
    const { itemsPerPage = 10, totalItems = 100, ...rest } = props as TablePaginationProps;
    return (
      <Pagination
        {...rest}
        currentPage={page}
        layout={layout}
        onPageChange={onPageChange}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    );
  }

  const { totalPages = 100, ...rest } = props as DefaultPaginationProps;
  return (
    <Pagination {...rest} currentPage={page} layout={layout} onPageChange={onPageChange} totalPages={totalPages} />
  );
};

export const Default = Template.bind({});

export const PaginationWithIcons = Template.bind({});
PaginationWithIcons.storyName = "Pagination with icons";
PaginationWithIcons.args = {
  showIcons: true,
};

export const Nav = Template.bind({});
Nav.args = {
  layout: "navigation",
};

export const NavWithIcons = Template.bind({});
NavWithIcons.storyName = "Nav with icons";
NavWithIcons.args = {
  layout: "navigation",
  showIcons: true,
};

export const Table = Template.bind({});
Table.args = {
  layout: "table",
};

export const TableWithIcons = Template.bind({});
TableWithIcons.storyName = "Table with icons";
TableWithIcons.args = {
  layout: "table",
  showIcons: true,
};
