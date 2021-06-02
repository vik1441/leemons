import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Pagination({
  currentPage,
  totalPages,
  goPage,
  maxPagesToShow = 5,
  showPrevAndNext,
  showFirstAndLast,
}) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const nItemstoDown = Math.floor(maxPagesToShow / 2);
    let nItemsToUp = maxPagesToShow - nItemstoDown;
    let start = currentPage - nItemstoDown;
    if (start < 1) {
      nItemsToUp += Math.abs(start) + 1;
      start = 1;
    }
    let end = currentPage + nItemsToUp;
    if (end > totalPages) {
      const diff = totalPages - end;
      start += diff;
      end = totalPages + 1;
      start += 1;
      if (start < 1) {
        start = 1;
      }
    }
    setPages(_.range(start, end));
  }, [currentPage, totalPages, maxPagesToShow]);

  return (
    <div className="py-2">
      <nav className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          {showFirstAndLast ? (
            <li>
              <div
                onClick={() => goPage(1)}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${
                  currentPage === 1
                    ? 'text-white border-pink-200 bg-pink-200'
                    : 'border-pink-500 bg-white text-pink-500'
                }`}
              >
                <i className="fas fa-chevron-left -ml-px"></i>
                <i className="fas fa-chevron-left -ml-px"></i>
              </div>
            </li>
          ) : null}

          {showPrevAndNext ? (
            <li>
              <div
                onClick={() => goPage(currentPage - 1)}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${
                  currentPage === 1
                    ? 'text-white border-pink-200 bg-pink-200'
                    : 'border-pink-500 bg-white text-pink-500'
                }`}
              >
                <i className="fas fa-chevron-left -ml-px"></i>
              </div>
            </li>
          ) : null}

          {pages.map((value) => (
            <li key={value}>
              <div
                onClick={() => goPage(value)}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 ${
                  currentPage === value ? 'text-white bg-pink-500' : 'bg-white text-pink-500'
                }`}
              >
                {value}
              </div>
            </li>
          ))}

          {showPrevAndNext ? (
            <li>
              <div
                onClick={() => goPage(currentPage + 1)}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${
                  currentPage === totalPages
                    ? 'text-white border-pink-200 bg-pink-200'
                    : 'border-pink-500 bg-white text-pink-500'
                }`}
              >
                <i className="fas fa-chevron-right -mr-px"></i>
              </div>
            </li>
          ) : null}

          {showFirstAndLast ? (
            <li>
              <div
                onClick={() => goPage(totalPages)}
                className={`first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ${
                  currentPage === totalPages
                    ? 'text-white border-pink-200 bg-pink-200'
                    : 'border-pink-500 bg-white text-pink-500'
                }`}
              >
                <i className="fas fa-chevron-right -mr-px"></i>
                <i className="fas fa-chevron-right -mr-px"></i>
              </div>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  goPage: PropTypes.func.isRequired,
  maxPagesToShow: PropTypes.number,
  showPrevAndNext: PropTypes.bool,
  showFirstAndLast: PropTypes.bool,
};

export default Pagination;
