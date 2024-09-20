import React from 'react'
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  
  const navigate = useNavigate();

  const { pageCount, page } = meta.pagination;
  
  const addButton = ({pageNumber, activeClass}) => {
    return (
      <button key={pageNumber}
        className={`btn bg-btn-accent btn-xs sm:btn-md join-item ${
          activeClass ? "btn btn-active" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  }
  const rendorButtons = () => {
    const pageButtons = [];
    // first button
pageButtons.push(addButton({pageNumber: 1, activeClass:page === 1}))
// dot button
if(page > 2){
  pageButtons.push(<button key="dot-btn 1" className='btn bg-btn-accent btn-xs sm:btn-md join-item'>...</button>)

}
// active/currentPage
if(page !== 1 && page !== pageCount){
  pageButtons.push(addButton({pageNumber:page, activeClass:page}))

}
// dot button
if(page < pageCount){
  pageButtons.push(<button key="dot-btn 2" className='btn bg-btn-accent btn-xs sm:btn-md join-item'>...</button>)

}
// last button
pageButtons.push(addButton({pageNumber:pageCount, activeClass:page === pageCount}))
  return pageButtons;
  }
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md bg-btn-accent join-item uppercase"
          onClick={() => {
            let prevPage = page - 1;
            if(prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage)
          }}
        >
          prev
        </button>
        {rendorButtons()}
        <button className="btn btn-xs sm:btn-md bg-btn-accent join-item uppercase" onClick={() => {
            let nextPage = page + 1;
            if(nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
        }}>
          next
        </button>
      </div>
    </div>
  );
}

export default ComplexPaginationContainer