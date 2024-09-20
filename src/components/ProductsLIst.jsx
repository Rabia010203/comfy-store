import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsLIst = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, image, price, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card flex flex-col sm:flex-row p-8 flex-wrap rounded-lg bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
            
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg  object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize text-lg font-medium">{title}</h3>
              <h4 className="capitalize text-md text-neural-content font-medium">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsLIst;
