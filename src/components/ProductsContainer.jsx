import React, { useState } from "react";
import { ProductsGrid } from "./ProductsGrid";
import { useLoaderData } from "react-router-dom";
import ProductsLIst from "./ProductsLIst";
import { BsGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const [layout, setLayout] = useState("grid");
  const totalProducts = meta.pagination.total;
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };
  return (
    <>
      {/* Header */}
      <div className="mt-8 flex justify-between items-center gap-y-4 border-b border-base-500">
        <h4 className="text-md font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">No matches found</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsLIst />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
