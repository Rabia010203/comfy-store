import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
const singleProductQuery = (id) => {
  return {
    queryKey: ["products", id],
    queryFn: () => {
  return customFetch(`/products/${id}`)
  }
 
  }
}
export const loader = (queryClient) => async ({ params }) => {
  const response = await queryClient.ensureQueryData(singleProductQuery(params.id));
  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, company, price, colors, description } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartId: product.id + productColor,
    productId: product.id,
    image,
    title,
    company,
    price,
    productColor,
    amount,
  };
  const dispatch = useDispatch();
  const addToCArt = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  const dollarsAmount = formatPrice(price);
  return (
    <section className="">
      <div className="mt-8 breadcrumbs">
        <ul>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-8 grid gap-y-8 lg:grid-cols-2 gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 lg:w-full object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className=" mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              {" "}
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge h-6 w-6  mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    } `}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              id="amount"
              value={amount}
              className="select select-secondary select-bordered select-md"
              onChange={handleAmount}
            >
              {generateAmountOptions(7)}
            </select>
          </div>
          <button
            type="submit"
            className="mt-6 btn btn-primary capitalize btn-md"
            onClick={() => addToCArt()}
          >
            add to bag
          </button>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
