'use client';
import StepperBarList from './components/StepperBarList';
import StepperBtnControl from './components/StepperBtnControl';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import useStepperBar from './useStepperBar';

export type TStepperBarProps = {
  pages: number;
  initPage: number;
  pagesToShow: number;
  currentPage: number;
  format: 'circle' | 'number';
  onChange: (page: number) => void;
};

const StepperBar = ({
  pages,
  initPage,
  pagesToShow,
  currentPage,
  format,
  onChange,
}: TStepperBarProps) => {
  const {
    handlePageChange,
    isBackActive,
    isNextActive,
    startPage,
    activePage,
  } = useStepperBar({ pages, initPage, pagesToShow, currentPage, onChange });

  if (pages <= 1) {
    return <></>;
  } else {
    return (
      <div className=" inline-flex flex-row flex-nowrap items-center text-white relative h-6 mx-36 justify-center">
        {isBackActive && (
          <StepperBtnControl
            className="right-[calc(100%+4rem)]"
            onClick={() => handlePageChange(activePage - 1)}
          >
            <MdKeyboardArrowLeft />
            <span>Atras</span>
          </StepperBtnControl>
        )}

        <StepperBarList
          pages={pages}
          startPage={startPage}
          pagesToShow={pagesToShow}
          activePage={activePage}
          format={format}
          onClick={handlePageChange}
        />

        {isNextActive && (
          <StepperBtnControl
            className="left-[calc(100%+4rem)]"
            onClick={() => handlePageChange(activePage + 1)}
          >
            <span>Siguiente</span>
            <MdKeyboardArrowRight />
          </StepperBtnControl>
        )}
      </div>
    );
  }
};
export default StepperBar;
