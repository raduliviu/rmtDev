import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

type PaginationControlsProps = {
  onChangePage: (direction: 'next' | 'previous') => void;
  currentPage: number;
  totalNumberOfPages: number;
};

export default function PaginationControls({
  onChangePage,
  currentPage,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <PaginationButton
          direction='previous'
          currentPage={currentPage}
          onClick={() => onChangePage('previous')}
        />
      )}

      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction='next'
          currentPage={currentPage}
          onClick={() => onChangePage('next')}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: 'previous' | 'next';
  currentPage: number;
  onClick: () => void;
};

function PaginationButton({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {direction === 'previous' && (
        <>
          <ArrowLeftIcon /> Page {currentPage - 1}
        </>
      )}

      {direction === 'next' && (
        <>
          Page {currentPage + 1} <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
