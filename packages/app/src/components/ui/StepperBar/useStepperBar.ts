'use client';
import { useState } from 'react';

export type TUseStepperBarProps = {
  pages: number;
  initPage: number;
  pagesToShow: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const useStepperBar = ({
  pages,
  initPage,
  pagesToShow,
  currentPage,
  onChange,
}: TUseStepperBarProps) => {
  const [startPage, setStartPage] = useState(initPage);
  const [activePage, setActivePage] = useState(currentPage);
  const [isBackActive, setIsBackActive] = useState(activePage > 1);
  const [isNextActive, setIsNextActive] = useState(activePage < pages);

  // Check if the page is between 1 and the number of total pages
  const checkInsideExtremeLimits = (page: number) => {
    if (page <= 0) {
      return 1;
    } else if (page >= pages) {
      return pages;
    } else {
      return page;
    }
  };

  // Check if we need to change de range. Its returns 0 if no change, -1 if we need to go back and 1 if we need the next range.
  const needToChangeRange = (
    page: number,
    initPage: number,
    QtyPages: number,
  ) => {
    if (page > initPage && page < initPage + pagesToShow) {
      return 0;
    } else if (page <= initPage) {
      return -1;
    } else if (page >= initPage + QtyPages) {
      return 1;
    }
  };

  // get the previous range from the actual one.Returns de value of the first page of the range.
  const getPreviousRange = (initPage: number, QtyPages: number) => {
    const newStartPage = initPage - QtyPages;
    if (newStartPage >= 1) {
      return newStartPage;
    } else {
      return 1;
    }
  };

  // get the next range from the actual one. Returns de value of the first page of the range.
  const getNextRange = (
    initPage: number,
    QtyPages: number,
    totalPages: number,
  ) => {
    const newStartPage = initPage + QtyPages;
    if (newStartPage <= QtyPages) {
      return 1;
    } else if (newStartPage <= totalPages) {
      return newStartPage;
    } else {
      return initPage;
    }
  };

  const handlePageChange = (page: number) => {
    page = checkInsideExtremeLimits(page);
    setActivePage(page);
    const rangeChange = needToChangeRange(page, startPage, pagesToShow);
    if (rangeChange === -1) {
      setStartPage((prev) => getPreviousRange(prev, pagesToShow));
    } else if (rangeChange === 1) {
      setStartPage((prev) => getNextRange(prev, pagesToShow, pages));
    }
    updateButtonStates(page);
    onChange(activePage);
  };

  const updateButtonStates = (page: number) => {
    setIsBackActive(page > 1);
    setIsNextActive(page < pages);
  };

  return {
    handlePageChange,
    isBackActive,
    isNextActive,
    startPage,
    activePage,
  };
};

export default useStepperBar;
