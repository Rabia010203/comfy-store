import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

export const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            className="card p-4 h-80 lg:w-max-none rounded-box shadow-md hover:shadow-lg"
            to={`/products/${product.id}`}
          >
            <figure className="Px-4 pr-4">
              <img src={image} alt={title} className="h-64 md:h-50 rounded-xl w-full object-cover"/>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
