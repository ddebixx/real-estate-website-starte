"use client";

import Link from "next/link";

interface PaginationProps {
  page: number;
  pageCount: number;
  pathname: string;
}

const PostsPagination = ({ page, pageCount, pathname }: PaginationProps) => {
  return (
    <>
      {page !== 1 && (
        <Link
          href={{
            pathname,
            query: {
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
              page: page + 1,
            },
          }}>
          Next
        </Link>
      )}
    </>
  );
};

export default PostsPagination;