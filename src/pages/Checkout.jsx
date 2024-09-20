import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { redirect } from "react-router-dom";
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if(!user){
    toast.warn("you must be logged in to checkout");
    return redirect("/login");
  }
  return null;
}
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
