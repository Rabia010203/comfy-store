import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { search, pathname } = useLocation();
  
  const navigate = useNavigate();

  const { pageCount, page } = meta.pagination;
  
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
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
        {pages.map((pageNumber) => {
          return (
            <button key={pageNumber}
              className={`btn bg-btn-accent btn-xs sm:btn-md join-item ${
                page === pageNumber ? "btn btn-active" : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
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
};

export default PaginationContainer;
