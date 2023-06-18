"use client";

import Link from "next/link";
import { parseSearchParams } from "../../../../utils/utils";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  pageCount: number;
  pathname: string;
}

const Pagination = ({ page, pageCount, pathname }: PaginationProps) => {
  const searchParams = useSearchParams();
  const parsedParams = parseSearchParams(searchParams);

  return (
    <>
      {page !== 1 && (
        <Link
          href={{
            pathname,
            query: {
              ...parsedParams,
              page: page - 1,
            },
          }}>
          Previous
        </Link>
      )}
      {pageCount > page && (
        <Link
          href={{
            pathname,
            query: {
              ...parsedParams,
              page: page + 1,
            },
          }}>
          Next
        </Link>
      )}
    </>
  );
};

export default Pagination;