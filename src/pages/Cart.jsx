import React from "react";
import { useSelector } from "react-redux";
import { SectionTitle, CartLists, CartTotals } from "../components";
import { Link } from "react-router-dom";
const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartLists />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals/>
          {user? <Link to="/checkout">Procceed to checkout</Link> :  <Link className="mt-10 btn btn-primary w-full" to="/login">Login Please</Link>}
        </div>
      </div>
    </>
  );
};
export default Cart;
