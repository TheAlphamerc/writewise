"use client";
import { Button } from "@/components/ui/button";
import { Fragment, useState } from "react";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from: number, to: number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
export default function Pagination({
  pageLimit = 10,
  totalRecords = 0,
  pageNeighbors = 0,
  onPageChanged = (data: any) => {},
}: {
  pageLimit?: number;
  totalRecords?: number;
  pageNeighbors?: number;
  onPageChanged?: (data: any) => void;
}) {
  // const { totalRecords = null, pageLimit = 30, pageNeighbors = 0 } = props;

  const [currentPage, setCurrentPage] = useState(0);
  pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
  totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

  // pageNeighbors can be: 0, 1 or 2
  pageNeighbors =
    typeof pageNeighbors === "number"
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0;

  const totalPages = Math.ceil(totalRecords / pageLimit);

  /**
   * Let's say we have 10 pages and we set pageNeighbors to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbours
   */
  function fetchPageNumbers() {
    // const totalPages1 = totalPages;
    // const currentPage1 = currentPage;
    // const pageNeighbors1 = pageNeighbors;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbors * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);
      let pages = range(startPage, endPage) as any;

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  const pages = fetchPageNumbers();
  function gotoPage(page: number) {
    // const { onPageChanged = (f) => f } = props;
    const currentPage = Math.max(0, Math.min(page, totalPages));
    console.log(
      "???? ~ file: pagination.tsx:209 ~ gotoPage ~ currentPage",
      currentPage
    );
    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    };

    setCurrentPage(currentPage);
    onPageChanged(paginationData);
  }

  function handleClick(evt: any, page: number) {
    evt.preventDefault();
    gotoPage(page);
  }

  function handleMoveLeft(evt: any) {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbors * 2 - 1);
  }

  function handleMoveRight(evt: any) {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbors * 2 + 1);
  }

  if (!totalRecords || totalPages === 1) {
    console.log("totalRecords", totalRecords);

    return null;
  }
  return (
    <Fragment>
      <nav aria-label="Pagination" className="flex items-center">
        <Button
          variant="outline"
          onClick={(e) => gotoPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        <ul className="Pagination flex items-center justify-center gap-4 flex-1">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                    onClick={handleMoveLeft}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

            if (page === RIGHT_PAGE)
              return (
                <li key={index} className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    aria-label="Next"
                    onClick={handleMoveRight}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

            return (
              <li key={index}>
                <Button
                  variant={
                    page === Math.max(currentPage, 1) ? "default" : "ghost"
                  }
                  color="primary"
                  onClick={(e) => handleClick(e, page)}
                >
                  {page}
                </Button>
              </li>
            );
          })}
        </ul>
        <Button
          variant="outline"
          onClick={(e) => gotoPage(Math.max(currentPage, 1) + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </nav>
    </Fragment>
  );
}
