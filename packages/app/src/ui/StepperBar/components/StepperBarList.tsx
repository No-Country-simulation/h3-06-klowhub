import StepperCircleButton from './StepperCircleButton';
import StepperDotButton from './StepperDotButton';
import StepperNumberButton from './StepperNumberButton';

export type TStepperBarListProps = {
  pages: number;
  startPage: number;
  pagesToShow: number;
  activePage: number;
  format: 'circle' | 'number';
  onClick: (page: number) => void;
};

const StepperBarList = ({
  pages,
  startPage = 0,
  pagesToShow = 8,
  activePage = 1,
  format = 'number',
  onClick,
}: TStepperBarListProps) => {
  const handlePage = (page: number) => {
    onClick(page);
  };

  return (
    <div className="flex gap-1 items-center justify-center text-base">
      {[...Array(pagesToShow)].map((_, index) => {
        const currentPage = startPage + index;
        if (currentPage >= 1 && currentPage <= pages) {
          return (
            <StepperDotButton
              key={index}
              aria-label={`Pagina ${currentPage}`}
              onClick={() => handlePage(currentPage)}
            >
              {format === 'circle' ? (
                <StepperCircleButton active={currentPage === activePage} />
              ) : (
                <StepperNumberButton active={currentPage === activePage}>
                  {currentPage}
                </StepperNumberButton>
              )}
            </StepperDotButton>
          );
        }
      })}
    </div>
  );
};

export default StepperBarList;
