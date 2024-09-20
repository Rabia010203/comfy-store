import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartLists = () => {
  const cartProducts = useSelector((state) => state.cartState.cartItems);
 
  return (
    <>
      {cartProducts.map((product) => {
        return <CartItem key={product.cartId} cartItem={product} />;
      })}
    </>
  );
};

export default CartLists;