"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination layout="table" currentPage={currentPage} itemsPerPage={10} totalItems={100} onPageChange={onPageChange} />
    </div>
  );
}
`;

export function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="table"
        currentPage={currentPage}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export const table: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "pagination/pagination.table.tsx",
  component: <Component />,
};
