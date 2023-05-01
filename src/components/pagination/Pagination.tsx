import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

export default function Pagination() {
  const { totalPages, currentPage, setCurrentPage }: any = useContext(MovieContext);


    console.log(currentPage)

    function handleClickNext(page:number){
      setCurrentPage(page)
    }

    function renderPageButtons(){
      const pageButton = []

      for(let i=1; i<= 20; i++){
        pageButton.push(
          <button key={i} onClick={() => handleClickNext(i)}>{i}</button>
        )
      }
      return pageButton
    }

  return (
  <div>
    {renderPageButtons()}
  </div>
  );
}
