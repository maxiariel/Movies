import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { Wrapper, PageButton, PaginationArrowButton } from "./StyledPagination";

export default function Pagination() {
  const { totalPages, currentPage, setCurrentPages }: any = useContext(MovieContext);

  function handleClickNext() {
    setCurrentPages(currentPage + 1);
  }

  function handleClickPrev() {
    setCurrentPages(currentPage - 1);
  }

  function handleClickPage(page: number) {
    setCurrentPages(page);
  }

  function renderPageButtons() {
    const pageButtons = [];

    const maxButtons = 9;
    const leftEllipsis = currentPage - 4 > 1;
    const rightEllipsis = currentPage + 4 < totalPages;

    let start = currentPage - 4;
    let end = currentPage + 4;

    if (start < 1) {
      end += Math.abs(start) + 1;
      start = 1;
    }

    if (end > totalPages) {
      start -= end - totalPages;
      end = totalPages ;
    }

    for (let i = start; i <= end; i++) {
      pageButtons.push(
        <PageButton key={i} isActive={i === currentPage} onClick={() => handleClickPage(i)}>
          {i}
        </PageButton>
      );
    }

    if (leftEllipsis) {

      pageButtons.unshift(<PageButton key="1" onClick={() => handleClickPage(1)}>1</PageButton>);
    }


    return pageButtons;
  }

  return (
    <Wrapper>
      <PaginationArrowButton disabled={currentPage === 1} onClick={handleClickPrev}>
        &laquo;
      </PaginationArrowButton>
      {renderPageButtons()}
      <PaginationArrowButton disabled={currentPage === totalPages} onClick={handleClickNext}>
        &raquo;
      </PaginationArrowButton>
    </Wrapper>
  );
}
